"use client"
import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"

interface TableOfContents {
  title: string
  url: string
}

interface Props {
  toc: TableOfContents[]
}

const TableOfContents: React.FC<Props> = ({ toc }) => {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-35% 0% -5% 0%" },
    )

    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="h-screen bg-black/50 backdrop-blur-sm relative w-full">
      <div className="sticky top-0 max-h-screen overflow-y-auto p-6">
        <div className="space-y-1">
          <h3 className="font-semibold text-white mb-4">Table of Contents</h3>
          {toc.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className={`block py-2 px-3 text-sm transition-colors hover:text-white ${activeId === item.url.replace("#", "") ? "text-white " : "text-gray-400"
                }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TableOfContents
