"use client"
import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { CometCard } from "@/components/comet-card"
import Image from "next/image"

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
    <div className="h-screen bg-black/50 backdrop-blur-sm w-full relative">
      <div className="h-full p-6 relative">
        <div className="space-y-1">
          <h3 className="font-semibold text-white mb-4">On This Page</h3>
          {toc.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className={`block py-[3px] px-3 text-sm transition-colors hover:text-white ${activeId === item.url.replace("#", "") ? "text-white " : "text-gray-400"
                }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2">
          <div className="w-22 h-48 mx-auto">
            <CometCard className="-rotate-25">
              <div
                className="h-full w-full cursor-pointer border border-white overflow-hidden rounded-[16px] bg-[#1F2121]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <Image
                  src="/ace.png"
                  alt="Comet card background"
                  width={160}
                  height={192}
                  className="h-full w-full object-cover rounded-[16px]"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 160px"
                />
              </div>
            </CometCard>
          </div>
          <h3 className="w-full text-white text-center -mt-14 tracking-tight leading-tight">
            Ace your frontend. Build with AceUI
          </h3>
        </div>
      </div>
    </div>
  )
}

export default TableOfContents
