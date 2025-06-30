import { notFound } from "next/navigation";
import { allDocs } from "content-collections"; // ✅ must be destructured
import { Mdx } from "@/components/mdx-components";

import Breadcrumbs from "@/components/BreadCrumbs";
interface DocPageProps {
  params: {
    slug?: string[];
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
    (
      <div className="relative bg-black min-h-screen text-white ">

        <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none z-0">
          <div className="fixed top-0 right-0 w-[700px] h-[500px] pointer-events-none z-0
  bg-[linear-gradient(#222_1px,transparent_1px),linear-gradient(90deg,#222_1px,transparent_1px)]
  bg-[size:60px_60px] opacity-70 fade-diagonal-mask"/>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto py-5 px-6 ">
          <div className="my-10">
            <Breadcrumbs componentName={doc.title} />
          </div>
          
          <h1 className="text-4xl font-bold">{doc.title}</h1>
          <p className="text-gray-400">{doc.description}</p>
          <div className="prose prose-invert mt-6">
            <Mdx code={doc.body.code} />
          </div>
        </div>
      


    </div>

  )
  );
}
