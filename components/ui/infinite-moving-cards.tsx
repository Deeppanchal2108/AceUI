"use client"

import React, {  useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    image: string
    alt: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  className?: string
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const animationDuration = {
    fast: "20s",
    normal: "40s",
    slow: "80s",
  }[speed]

  const animationDirection = direction === "left" ? "normal" : "reverse"

  return (
    <div
      className={cn(
        "overflow-hidden w-full",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className="flex gap-6 w-max animate-scroll"
        style={{
          animationDuration,
          animationDirection,
        }}
      >
        {/* duplicated content */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="relative w-[300px] h-[340px] shrink-0 rounded-md bg-gradient-to-b from-neutral-100 to-neutral-200"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
