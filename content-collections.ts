import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

function extractSections(markdown: string) {
    const tree = unified()
        .use(remarkParse)
        .use(remarkMdx)
        .parse(markdown);

    const sections: Record<string, string> = {};
    let current: string | null = null;

    visit(tree, (node) => {
        if (node.type === "heading" && node.depth === 2) {
            // Get heading text like 'Installation'
            current = node.children.map((c) => ("value" in c ? c.value : "")).join("").trim();
            sections[current] = "";
        } else if (current && "value" in node) {
            sections[current] += node.value + "\n";
        }
    });

    return sections;
}

const docs = defineCollection({
    name: "docs",
    directory: "content/docs",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        published: z.boolean(),
        date: z.string(),
        slug: z.string(),
    }),
    transform: async (doc, context) => {
        const sections = extractSections(doc.content);
        const body = await compileMDX(context, doc, {
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: {
                            className: ["subheading-anchor"],
                        },
                    },
                ],
                
            ],
            remarkPlugins: [
                remarkGfm, 
            ],
           
        });

        return {
            ...doc,
            body: {
                raw: doc.content,
                code: body,
            },
            sections, // ← You can now access doc.sections.Installation etc.
        };
    },
});

export default defineConfig({
    collections: [docs],
});
