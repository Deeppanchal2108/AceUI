"use client"

import { motion, type MotionValue, useScroll, useTransform } from "motion/react"
import { type ComponentPropsWithoutRef, type FC, type ReactNode, useRef } from "react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"],
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0 my-10  flex items-center justify-center", className)}>
      <div className="mx-auto max-w-4xl px-[1rem] py-[2rem]">
        <span className="flex flex-wrap justify-center font-pop text-white text-3xl md:text-5xl font-semibold leading-tighter text-center tracking-tight">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </span>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  )
}
