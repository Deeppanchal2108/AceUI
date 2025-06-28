import { notFound } from "next/navigation";
import { allDocs } from "content-collections"; // ✅ must be destructured
import { Mdx } from "@/components/mdx-components";

import Breadcrumbs from "@/components/breadcrumbs";
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
    
    <div className="max-w-3xl mx-auto py-5 p-10 ">
      <Breadcrumbs componentName={doc.title} />
      <h1 className="text-4xl font-sans font-bold">{doc.title}</h1>
      <p className="text-muted-foreground mb-4">{doc.description}</p>
      <div className="prose"><Mdx code={doc.body.code} /></div>
    </div>
    
  );
}
