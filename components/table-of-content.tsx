'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface TableOfContents {
    title: string
    url: string
}

interface Props {
    toc: TableOfContents[]
}

const TableOfContents: React.FC<Props> = ({ toc }) => {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting)
                if (visible) {
                    setActiveId(`#${visible.target.id}`)
                }
            },
            {
                rootMargin: '0px 0px -40% 0px',
                threshold: 0.1,
            }
        )

        toc.forEach((item) => {
            const target = document.getElementById(item.url.replace('#', ''))
            if (target) {
                observer.observe(target)
            }
        })

        return () => observer.disconnect()
    }, [toc])

    return (
<div className="fixed top-24 right-8 z-50 backdrop-blur-lg bg-black/50 p-6 rounded-xl w-64 space-y-6 h-fit border border-white/10">
  <div>
    <p className="text-sm text-white/80 mb-2">On This Page</p>

    <div className="relative pl-4">
    
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-700" />

      <ul className="space-y-2 w-full">
        {toc.map((item) => {
          const isActive = activeId === item.url;
          return (
            <li key={item.title} className="relative w-full">
              {isActive && (
                
                <div className=" absolute left-0 top-1/2 -translate-y-1/2 h-6 w-0.5 bg-white" />
              )}
              <Link
                href={item.url}
                className={`block transition-all duration-300 pl-2 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
</div>

    )
}

export default TableOfContents
