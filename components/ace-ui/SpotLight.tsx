'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface SpotLightProps {
    children?: React.ReactNode
    className?: string
    spotlightColor?: string
}

export const SpotLight = ({
    className,
    children = 'Hover me',
    spotlightColor = 'rgba(151, 151, 151, 0.1)'
}: SpotLightProps) => {
    const spotRef = React.useRef<HTMLDivElement>(null)
    const [isGlowing, setIsGlowing] = React.useState(false)
    const [mouse, setMouse] = React.useState({ x: 0, y: 0 })
    const [fade, setFade] = React.useState(100)

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!spotRef.current || isGlowing) return
        const rect = spotRef.current.getBoundingClientRect()
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const onFocus = () => {
        setIsGlowing(true)
        setFade(1)
    }

    const onBlur = () => {
        setIsGlowing(false)
        setFade(0)
    }

    const onMouseEnter = () => {
        setFade(1)
    }

    const onMouseLeave = () => {
        setFade(0)
    }

    return (
        <div
            ref={spotRef}
            onMouseMove={onMouseMove}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={cn(
                'h-52 w-40 flex justify-center items-center bg-black border border-white relative overflow-hidden rounded-xl cursor-pointer text-gray-400 hover:text-white',
                className // allow overrides
            )}
        >
            {children}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity: fade,
                    background: `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, ${spotlightColor}, transparent 40%)`
                }}
            />
        </div>
    )
}
