"use client";

import React, { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";

interface CopyCodeProps {
    children: React.ReactNode;
}

function CopyCode({ children }: CopyCodeProps) {
    const [copied, setCopied] = useState(false);
    const codeRef = useRef<HTMLPreElement>(null);
    // const [code, setCode] = useState<string>("");

    const handleCopy = () => {
        const text = codeRef.current?.innerText || "";
        // setCode(text);
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 900);
    };

    return (
        <div className="w-[310px] mx-auto sm:w-full relative group rounded-lg overflow-x-auto">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 z-10 text-white px-2 py-1 text-xs"
            >
                {copied ? (
                    <Check className="transition-opacity duration-300" />
                ) : (
                    <Copy className="transition-opacity duration-300" />
                )}
            </button>

            <pre
                ref={codeRef}
                className="p-4 bg-zinc-800 text-white rounded-md overflow-auto text-sm"
            >
                <code>{children}</code>
            </pre>
        </div>
    );
}

export default CopyCode;
