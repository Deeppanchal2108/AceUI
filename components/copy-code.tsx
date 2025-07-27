"use client"

import React, { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Highlight, themes } from "prism-react-renderer"

interface CopyCodeProps {
    children: string
    language?: "tsx" | "js" | "ts" | "json" | "css" | "html" | string
}

function CopyCode({ children, language = "tsx" }: CopyCodeProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(children)
        setCopied(true)
        setTimeout(() => setCopied(false), 900)
    }

    return (
        <div className="w-[310px] sm:w-full relative group rounded-lg overflow-x-auto bg-[#1e1e1e]">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 z-10 text-white px-2 py-1 text-xs"
            >
                {copied ? (
                    <Check className="transition-opacity duration-300 w-4 h-4" />
                ) : (
                    <Copy className="transition-opacity duration-300 w-4 h-4" />
                )}
            </button>

            <Highlight
                code={children.trim()}
                language={language}
                theme={themes.vsDark}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={`p-4 text-sm ${className}`} style={style}>
                        {tokens.map((line, i) => {
                            const {  ...restLineProps } = getLineProps({ line })
                            return (
                                <div key={i} {...restLineProps}>
                                    <span className="select-none text-zinc-600 pr-3">{i + 1}</span>
                                    {line.map((token, j) => {
                                        const {  ...restTokenProps } = getTokenProps({ token })
                                        return <span key={j} {...restTokenProps} />
                                    })}
                                </div>
                            )
                        })}
                    </pre>
                )}
            </Highlight>
        </div>
    )
}

export default CopyCode
