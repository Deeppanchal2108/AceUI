"use client"
import React from "react"
import { cn } from "@/lib/utils"

export type KbdKey =
    | "command"
    | "shift"
    | "ctrl"
    | "option"
    | "enter"
    | "delete"
    | "escape"
    | "tab"
    | "capslock"
    | "up"
    | "right"
    | "down"
    | "left"
    | "pageup"
    | "pagedown"
    | "home"
    | "end"
    | "help"
    | "space"
    | "fn"
    | "win"
    | "alt"
    | string

const keyIcons: Record<string, string> = {
    command: "⌘",
    shift: "⇧",
    ctrl: "⌃",
    option: "⌥",
    enter: "⏎",
    delete: "⌫",
    escape: "⎋",
    tab: "⇥",
    capslock: "⇪",
    up: "↑",
    down: "↓",
    left: "←",
    right: "→",
    pageup: "⇞",
    pagedown: "⇟",
    home: "⇱",
    end: "⇲",
    help: "?",
    space: "␣",
    fn: "fn",
    win: "⊞",
    alt: "⎇",
}

interface KbdProps extends React.HTMLAttributes<HTMLDivElement> {
    keys: KbdKey[]
    variant?: "default" | "outline" | "ghost"
    size?: "sm" | "md" | "lg"
}

export function Kbd({ keys, className, variant = "default", size = "md", ...props }: KbdProps) {
    const variants = {
        default:
            "bg-gradient-to-b from-gray-100 to-gray-200 border-gray-300 text-gray-800 shadow-[0_2px_0_0_rgb(0,0,0,0.1),inset_0_1px_0_0_rgb(255,255,255,0.8)] dark:from-gray-700 dark:to-gray-800 dark:border-gray-600 dark:text-gray-200 dark:shadow-[0_2px_0_0_rgb(0,0,0,0.3),inset_0_1px_0_0_rgb(255,255,255,0.1)]",
        outline: "bg-transparent border-2 border-gray-300 text-gray-700 shadow-sm dark:border-gray-600 dark:text-gray-300",
        ghost:
            "bg-gray-100/50 border-gray-200 text-gray-600 shadow-sm dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-400",
    }

    const sizes = {
        sm: "gap-0.5 px-1 py-0.5 text-[9px] min-h-[18px]",
        md: "gap-1 px-1.5 py-1 text-[10px] min-h-[22px]",
        lg: "gap-1.5 px-2 py-1 text-xs min-h-[26px]",
    }

    const keySizes = {
        sm: "px-0.5 py-0.5 min-w-[14px]",
        md: "px-1 py-0.5 min-w-[16px]",
        lg: "px-1.5 py-1 min-w-[20px]",
    }

    const iconTextSizes = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-lg",
    }

    return (
        <div
            className={cn(
                "inline-flex select-none items-center justify-center rounded-md border font-mono font-medium transition-all",
                variants[variant],
                sizes[size],
                className,
            )}
            {...props}
        >
            {keys.map((key, i) => {
                const icon = keyIcons[key.toLowerCase()] || key.toUpperCase()

                return (
                    <div key={i}>
                        <span
                            className={cn(
                                "inline-flex items-center justify-center rounded leading-none",
                                keySizes[size],
                                iconTextSizes[size]
                            )}
                        >
                            {icon}
                        </span>

                    </div>
                )
            })}
        </div>
    )
}
