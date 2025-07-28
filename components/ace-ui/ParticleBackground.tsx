"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
    color: string
    type: "dot" | "line"
    length?: number
    rotation?: number
}

interface ParticleBackgroundProps {
    // Animation configuration
    direction?:
    | "left-to-right"
    | "right-to-left"
    | "top-to-bottom"
    | "bottom-to-top"
    | "diagonal-tl-br"
    | "diagonal-tr-bl"
    speed?: number // Pixels per second
    maxParticles?: number // Total number of particles

    // Dots configuration
    dotsEnabled?: boolean
    dotColor?: string
    dotSize?: number // Max size for dots
    dotOpacity?: number

    // Lines configuration (small, horizontal focus)
    linesEnabled?: boolean
    lineColor?: string
    lineWidth?: number // Max width for lines
    lineLength?: number // Max length for lines
    lineOpacity?: number

    // Background & Effects
    backgroundColor?: string // Changed default to transparent
    glow?: boolean // Adds a subtle glow effect
    fadeEdges?: boolean // Particles fade out near canvas edges
}

export  function ParticleBackground({
    direction = "left-to-right",
    speed = 50, // Default speed: 50 pixels per second
    maxParticles = 300, // Increased default particle count
    dotsEnabled = true,
    dotColor = "#a78bfa", // Purple
    dotSize = 2,
    dotOpacity = 0.6,
    linesEnabled = true,
    lineColor = "#60a5fa", // Blue
    lineWidth = 1,
    lineLength = 5,
    lineOpacity = 0.5,
    backgroundColor = "transparent", // Default to transparent
    glow = true,
    fadeEdges = true,
}: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationFrameId = useRef<number | undefined>(undefined)
    const particles = useRef<Particle[]>([])
    const lastFrameTime = useRef<number>(0)
    const fpsInterval = 1000 / 60 // Target 60 FPS

    // Get velocity based on direction (in pixels per second)
    const getVelocity = useCallback(() => {
        const baseSpeed = speed
        const randomVariation = (Math.random() - 0.5) * (baseSpeed * 0.2) // +/- 20% variation

        switch (direction) {
            case "left-to-right":
                return { vx: baseSpeed + randomVariation, vy: randomVariation }
            case "right-to-left":
                return { vx: -baseSpeed + randomVariation, vy: randomVariation }
            case "top-to-bottom":
                return { vx: randomVariation, vy: baseSpeed + randomVariation }
            case "bottom-to-top":
                return { vx: randomVariation, vy: -baseSpeed + randomVariation }
            case "diagonal-tl-br":
                return { vx: baseSpeed * 0.7 + randomVariation, vy: baseSpeed * 0.7 + randomVariation }
            case "diagonal-tr-bl":
                return { vx: -(baseSpeed * 0.7) + randomVariation, vy: baseSpeed * 0.7 + randomVariation }
            default:
                return { vx: baseSpeed + randomVariation, vy: randomVariation }
        }
    }, [direction, speed])

    // Create a new particle or reset an existing one
    const resetParticle = useCallback(
        (particle: Particle | null, type: "dot" | "line", canvas: HTMLCanvasElement): Particle => {
            const { vx, vy } = getVelocity()
            const margin = 50 // Margin outside canvas to spawn particles

            let x, y

            // Determine spawn point based on direction
            if (direction === "left-to-right" || direction === "diagonal-tl-br") {
                x = -margin
                y = Math.random() * (canvas.height + 2 * margin) - margin // Random Y across extended height
            } else if (direction === "right-to-left" || direction === "diagonal-tr-bl") {
                x = canvas.width + margin
                y = Math.random() * (canvas.height + 2 * margin) - margin
            } else if (direction === "top-to-bottom") {
                x = Math.random() * (canvas.width + 2 * margin) - margin
                y = -margin
            } else if (direction === "bottom-to-top") {
                x = Math.random() * (canvas.width + 2 * margin) - margin
                y = canvas.height + margin
            } else {
                // Default to left-to-right if direction is not recognized
                x = -margin
                y = Math.random() * canvas.height
            }

            const newParticle: Particle = {
                x,
                y,
                vx,
                vy,
                size: type === "dot" ? dotSize * (0.5 + Math.random() * 0.5) : lineWidth,
                opacity: type === "dot" ? dotOpacity : lineOpacity,
                color: type === "dot" ? dotColor : lineColor,
                type,
            }

            if (type === "line") {
                newParticle.length = lineLength * (0.5 + Math.random() * 0.5)
                // Keep lines mostly horizontal for horizontal directions, otherwise random
                if (direction === "left-to-right" || direction === "right-to-left") {
                    newParticle.rotation = (Math.random() - 0.5) * 0.1 // Very slight angle
                } else {
                    newParticle.rotation = Math.random() * Math.PI * 2 // Random rotation for other directions
                }
            }

            if (particle) {
                // Update existing particle
                Object.assign(particle, newParticle)
                return particle
            } else {
                // Create new particle
                return newParticle
            }
        },
        [direction, getVelocity, dotSize, dotColor, dotOpacity, lineWidth, lineLength, lineColor, lineOpacity],
    )

    // Initialize or re-initialize particles
    const initializeParticles = useCallback(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const newParticles: Particle[] = []
        let currentDotCount = 0
        let currentLineCount = 0

        // Distribute particles based on enabled types
        for (let i = 0; i < maxParticles; i++) {
            let type: "dot" | "line"
            if (dotsEnabled && (!linesEnabled || currentDotCount < maxParticles / 2)) {
                type = "dot"
                currentDotCount++
            } else if (linesEnabled && (!dotsEnabled || currentLineCount < maxParticles / 2)) {
                type = "line"
                currentLineCount++
            } else if (dotsEnabled) {
                type = "dot"
                currentDotCount++
            } else if (linesEnabled) {
                type = "line"
                currentLineCount++
            } else {
                // If both are disabled, break
                break
            }
            newParticles.push(resetParticle(null, type, canvas))
        }
        particles.current = newParticles
    }, [maxParticles, dotsEnabled, linesEnabled, resetParticle])

    // Update particle position and reset if off-screen
    const updateParticle = useCallback(
        (particle: Particle, canvas: HTMLCanvasElement, deltaTimeInSeconds: number) => {
            particle.x += particle.vx * deltaTimeInSeconds
            particle.y += particle.vy * deltaTimeInSeconds

            const margin = 50 // Margin for checking if off-screen

            // Check if particle is off-screen based on its velocity direction
            let isOffScreen = false
            if (particle.vx > 0 && particle.x > canvas.width + margin) isOffScreen = true // Moving right
            if (particle.vx < 0 && particle.x < -margin) isOffScreen = true // Moving left
            if (particle.vy > 0 && particle.y > canvas.height + margin) isOffScreen = true // Moving down
            if (particle.vy < 0 && particle.y < -margin) isOffScreen = true // Moving up

            if (isOffScreen) {
                resetParticle(particle, particle.type, canvas) // Reset in place
            }
        },
        [resetParticle],
    )

    // Render particle on canvas
    const renderParticle = useCallback(
        (ctx: CanvasRenderingContext2D, particle: Particle, canvas: HTMLCanvasElement) => {
            let currentOpacity = particle.opacity

            // Fade edges effect
            if (fadeEdges) {
                const fadeZone = 150 // Pixels from edge to start fading
                const distanceX = Math.min(particle.x, canvas.width - particle.x)
                const distanceY = Math.min(particle.y, canvas.height - particle.y)
                const minDistance = Math.min(distanceX, distanceY)

                if (minDistance < fadeZone) {
                    currentOpacity *= minDistance / fadeZone
                }
            }

            ctx.globalAlpha = currentOpacity

            if (glow) {
                ctx.shadowColor = particle.color
                ctx.shadowBlur = particle.type === "dot" ? 6 : 3 // More blur for dots
            }

            ctx.fillStyle = particle.color

            if (particle.type === "dot") {
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fill()
            } else {
                // Render small line
                ctx.save()
                ctx.translate(particle.x, particle.y)
                if (particle.rotation) {
                    ctx.rotate(particle.rotation)
                }
                ctx.fillRect(-particle.length! / 2, -particle.size / 2, particle.length!, particle.size)
                ctx.restore()
            }

            if (glow) {
                ctx.shadowBlur = 0 // Reset shadow for next draw
            }
        },
        [fadeEdges, glow],
    )

    // Main animation loop
    const animate = useCallback(
        (currentTime: number) => {
            animationFrameId.current = requestAnimationFrame(animate)

            const deltaTime = currentTime - lastFrameTime.current
            if (deltaTime < fpsInterval) {
                return // Skip frame if not enough time has passed
            }
            lastFrameTime.current = currentTime - (deltaTime % fpsInterval) // Adjust lastFrameTime for consistent FPS

            const canvas = canvasRef.current
            if (!canvas) return

            const ctx = canvas.getContext("2d")
            if (!ctx) return

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and render particles
            particles.current.forEach((particle) => {
                updateParticle(particle, canvas, deltaTime / 1000) // Pass delta in seconds
                renderParticle(ctx, particle, canvas)
            })
        },
        [fpsInterval, updateParticle, renderParticle],
    )

    // Handle canvas resizing
    const handleResize = useCallback(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        // Set canvas dimensions to match its display size, considering device pixel ratio
        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width * window.devicePixelRatio
        canvas.height = rect.height * window.devicePixelRatio

        const ctx = canvas.getContext("2d")
        if (ctx) {
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio) // Scale context for high-DPI screens
        }

        initializeParticles() // Re-initialize particles on resize
    }, [initializeParticles])

    // Setup and cleanup
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        // Set initial size and add resize listener
        handleResize()
        window.addEventListener("resize", handleResize)

        // Start animation loop
        lastFrameTime.current = performance.now()
        animationFrameId.current = requestAnimationFrame(animate)

        // Cleanup on unmount
        return () => {
            window.removeEventListener("resize", handleResize)
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
        }
    }, [handleResize, animate])

    // Re-initialize particles if props change
    useEffect(() => {
        initializeParticles()
    }, [
        initializeParticles,
        direction,
        speed,
        maxParticles,
        dotsEnabled,
        dotColor,
        dotSize,
        dotOpacity,
        linesEnabled,
        lineColor,
        lineWidth,
        lineLength,
        lineOpacity,
        glow,
        fadeEdges,
    ])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ backgroundColor }}>

            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    )
}
