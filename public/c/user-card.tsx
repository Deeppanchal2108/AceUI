// components/ui/user-card.tsx

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface UserCardProps {
    avatarSrc: string;
    name: string;
    description: string;
    className?: string;
}

export function UserCard({
    avatarSrc,
    name,
    description,
    className,
}: UserCardProps) {
    return (
        <div
            className={cn(
                "flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900",
                className
            )}
        >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                <Image
                    src={avatarSrc}
                    alt={name}
                    fill
                    sizes="48px"
                    className="object-cover"
                />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {name}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {description}
                </p>
            </div>
        </div>
    );
}
