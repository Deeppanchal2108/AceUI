"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollerRef.current?.scrollLeft || 0)
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = "grabbing"
    }
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = "grab"
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = "grab"
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollerRef.current) return
    e.preventDefault()
    const x = e.pageX - (scrollerRef.current.offsetLeft || 0)
    const walk = (x - startX) * 2
    scrollerRef.current.scrollLeft = scrollLeft - walk
  }

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards")
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse")
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn("flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 cursor-grab", start && "animate-scroll")}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ userSelect: "none" }}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[300px] h-[400px] rounded-md max-w-full shrink-0 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[300px]  "
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
