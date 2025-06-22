import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const docs = defineCollection({
    name: "docs",
    directory: "content/docs", // or wherever your MDX files are
    include: "**/*.mdx",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        published: z.boolean(),
        date: z.string(),
        slug: z.string(),
    }),
});

export default defineConfig({
    collections: [docs],
});
