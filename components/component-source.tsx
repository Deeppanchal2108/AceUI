"use client";

import { useEffect, useState } from "react";
import { componentMap } from "./component-map";
import { Copy, Check } from "lucide-react";

interface ComponentSourceProps {
    name: string;
}

export function ComponentSource({ name }: ComponentSourceProps) {
    const Component = componentMap[name];

    if (!Component) {
        return (
            <div className="text-red-500">
                Component "{name}" not found in componentMap.
            </div>
        );
    }

    const [code, setCode] = useState<string>("");
    const [copy, setCopy] = useState<boolean>(false);

    useEffect(() => {
        const fetchCode = async () => {
            try {
                const res = await fetch(`/c/${name}.tsx`);
                const text = await res.text();
                setCode(text);
            } catch (error) {
                setCode("// Failed to load source code.");
            }
        };
        fetchCode();
    }, [name]);

    const handleClick = () => {
        navigator.clipboard.writeText(code);
        setCopy(true);
        setTimeout(() => setCopy(false), 900);
    };

    return (
        <div className="w-[310px] sm:w-full mx-auto overflow-x-auto rounded-lg">
            <pre className="relative whitespace-pre-wrap rounded-md bg-zinc-800 p-4 text-white text-sm overflow-x-auto">
                <button
                    onClick={handleClick}
                    className="absolute top-0 right-0 px-5 py-3 cursor-pointer transition-all duration-300 ease-in group"
                >
                    <span className="inline-block transition-all duration-300 ease-in-out">
                        {copy ? (
                            <Check className="transition-opacity duration-300" />
                        ) : (
                            <Copy className="transition-opacity duration-300" />
                        )}
                    </span>
                </button>

                <code>{code}</code>
            </pre>
        </div>
    );
}
