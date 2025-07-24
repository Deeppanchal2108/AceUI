import { notFound } from "next/navigation"
import { allDocs } from "content-collections"
import { Mdx } from "@/components/mdx-components"
import { getToc } from "@/lib/toc"
import TableOfContents from "@/components/table-of-content"
import Breadcrumbs from "@/components/bread-crumbs"


async function getDocFromParams(params: { slug?: string[] }) {
  const slug = params.slug?.join("/") || "index"
  const doc = allDocs.find((doc) => {
    const slugParts = doc.slug.split("/")
    return slugParts[slugParts.length - 1] === slug
  })
  return doc || null
}

export default async function ComponentDocPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params
  const doc = await getDocFromParams(resolvedParams)
  const toc = await getToc(doc?.body.raw ?? "")

  if (!doc || !doc.published) {
    notFound()
  }

  return (
    <div className="relative w-full text-white">
      <div className="flex flex-row w-full max-w-full">
        <div className="flex-1 min-w-0">
          <div className="w-full py-5 px-4 sm:px-6 lg:px-8">
            <div className="mt-3 mb-6 sm:mb-8">
              <Breadcrumbs componentName={doc.title} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">{doc.title}</h1>
            <p className="text-gray-400 mt-2 text-base sm:text-md md:text-md">{doc.description}</p>
            <div className="prose prose-invert mt-6 mb-16 max-w-none">
              <Mdx code={doc.body.code} />
            </div>
          </div>
        </div>

        {toc.length !== 0 && (
          <div className="w-64 flex-shrink-0 hidden xl:block relative">
            <div className="fixed top-4 w-64 h-[calc(100vh-2rem)] border-l border-border border-gray-500 text-sm bg-black mt-8">
              <div className="h-full overflow-y-auto p-4">
                <TableOfContents toc={toc} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
