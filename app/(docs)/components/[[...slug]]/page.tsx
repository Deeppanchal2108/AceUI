import { notFound } from "next/navigation"
import { allDocs } from "content-collections"
import { Mdx } from "@/components/mdx-components"
import { getToc } from "@/lib/toc"
import TableOfContents from "@/components/table-of-content"
import Breadcrumbs from "@/components/bread-crumbs"

interface DocPageProps {
  params: {
    slug?: string[]
  }
}

async function getDocFromParams(props: DocPageProps) {
  const slug = props.params.slug?.join("/") || "index"
  const doc = allDocs.find((doc) => {
    const slugParts = doc.slug.split("/")
    return slugParts[slugParts.length - 1] === slug
  })
  return doc || null
}

export default async function ComponentDocPage(props: DocPageProps) {
  const doc = await getDocFromParams(props)
  const toc = await getToc(doc?.body.raw ?? "")

  if (!doc || !doc.published) {
    notFound()
  }

  return (
    <div className="relative min-h-screen w-full text-white ">
      <div className="flex flex-row w-full h-screen">
        <div className="flex-1 overflow-y-auto">
          <div className="relative z-10 w-full py-5 px-4 sm:px-6 lg:px-8">
            <div className="mt-3 mb-6 sm:mb-8">
              <Breadcrumbs componentName={doc.title} />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold">{doc.title}</h1>

            <p className="text-gray-400 mt-2 text-base sm:text-lg">{doc.description}</p>

            <div className="prose prose-invert mt-6 mb-16 max-w-none">
              <Mdx code={doc.body.code} />
            </div>
          </div>

        </div>
        {toc.length !== 0 && (
          <div className="flex-shrink-0 w-64 border-l border-border text-sm hidden xl:block">
            <TableOfContents toc={toc} />
          </div>
        )}
      </div>
    </div>
  )
}
