import { notFound } from "next/navigation";
import { allDocs } from "content-collections"; // ✅ must be destructured
import { Mdx } from "@/components/mdx-components";
import type { Metadata } from "next";


interface DocPageProps {
  params: {
    slug: string[];
  };
}
async function getDocFromParams(props: DocPageProps) {
  const slug = props.params.slug?.join("/") || "index";

  const doc = allDocs.find((doc) => {
    const slugParts = doc.slug.split("/"); // e.g. ["components", "text-scramble"]
    return slugParts[slugParts.length - 1] === slug;
  });

  return doc || null;
}

export default async function ComponentDocPage(props: DocPageProps) {
  const doc = await getDocFromParams(props);

  if (!doc || !doc.published) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold">{doc.title}</h1>
      <p className="text-muted-foreground mb-4">{doc.description}</p>
      
    </div>
  );
}
