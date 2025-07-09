import { notFound } from "next/navigation";
import { allDocs } from "content-collections"; 
import { Mdx } from "@/components/mdx-components";
import { getToc } from "@/lib/toc";
import TableOfContents from "@/components/table-of-content";

import Breadcrumbs from "@/components/bread-crumbs";
interface DocPageProps {
  params: {
    slug?: string[];
  };
}
async function getDocFromParams(props: DocPageProps) {
  const slug = props.params.slug?.join("/") || "index";

  const doc = allDocs.find((doc) => {
    const slugParts = doc.slug.split("/"); 
    return slugParts[slugParts.length - 1] === slug;
  });

  return doc || null;
}

export default async function ComponentDocPage(props: DocPageProps) {
  const doc = await getDocFromParams(props);

  const toc = await getToc(doc?.body.raw ?? "");
  console.log("toc ", toc)
  
  

  if (!doc || !doc.published) {
    notFound();
  }
  return (
    (
      <div className="relative  min-h-screen w-full text-white  ">

        

        <div className="flex flex-row w-full"> 
          <div className="relative z-10 max-w-2xl mx-auto py-5 px-6 ">
            <div className="mt-3 mb-7">
              <Breadcrumbs componentName={doc.title} />
            </div>

            <h1 className="text-4xl font-bold">{doc.title}</h1>
            <p className="text-gray-400">{doc.description}</p>
            <div className="prose prose-invert mt-6">
              <Mdx code={doc.body.code} />
            </div>
          </div>
          <div className="z-10 isolate p-4">
            <TableOfContents toc={toc} />
          </div>

        </div>


      </div>

    )
  );
}
