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
                rootMargin: '0px 0px -60% 0px',
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
        <div>
            
        </div>
//         <div className="fixed top-12 right-8 z-50 backdrop-blur-lg bg-transparent border border-white/20 shadow-lg p-6 rounded-xl w-64 space-y-6 h-fit">
// <div>
//                 <p className="text-sm  text-white/80 mb-2">On This Page</p>
//                 <ul className="border-l border-gray-700 pl-4 space-y-2">
//                     {toc.map((item) => {
//                         const isActive = activeId === item.url
//                         return (
//                             <li key={item.title}>
//                                 <Link
//                                     href={item.url}
//                                     className={`block transition-all duration-300 ${isActive
//                                             ? 'text-white font-semibold border-l-2 border-indigo-400 pl-2 glow'
//                                             : 'text-gray-400 hover:text-white'
//                                         }`}
//                                 >
//                                     {item.title}
//                                 </Link>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </div>

            
//         </div>
    )
}

export default TableOfContents
