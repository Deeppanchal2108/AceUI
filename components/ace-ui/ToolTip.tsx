// components/ui/tooltip.tsx

"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    className?: string;
}

export function Tooltip({
    children = (
        <Button className="rounded-md bg-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-neutral-700 active:scale-95 sm:px-6 sm:py-2.5">
            📋 Copy
        </Button>
    ),

    content ="Copy to clipboard",
    side = "top",
    align = "center",
    className,
}: TooltipProps) {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root delayDuration={100}>
                <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        side={side}
                        align={align}
                        sideOffset={8}
                        className={cn(
                            "z-50 max-w-xs rounded-md bg-neutral-900 px-3 py-1.5 text-xs text-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=delayed-open]:fade-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
                            className
                        )}
                    >
                        {content}
                        <TooltipPrimitive.Arrow className="fill-neutral-900" />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
}
