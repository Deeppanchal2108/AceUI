"use client";

import { useEffect, useState } from "react";
import { componentMap } from "./component-map";
import { Copy, Check } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer"
interface ComponentSourceProps {
    name: string;
     language?: "tsx" | "js" | "ts" | "json" | "css" | "html" | string

}


export function ComponentSource({ name, language='tsx' }: ComponentSourceProps) {

    const [code, setCode] = useState<string>("");
    const [copy, setCopy] = useState<boolean>(false);
    const Component = componentMap[name];

    

    useEffect(() => {
        const fetchCode = async () => {
            try {
                const res = await fetch(`/c/${name}.tsx`);
                const text = await res.text();
                setCode(text);
            } catch (error) {
                setCode(`Failed to load source code: ${error}`);
            }
        };
        fetchCode();
    }, [name]);

    const handleClick = () => {
        navigator.clipboard.writeText(code);
        setCopy(true);
        setTimeout(() => setCopy(false), 900);
    };

    if (!Component) {
        return (
            <div className="text-red-500">
                Component {name} not found in componentMap.
            </div>
        );
    }


    return (
        <div className="w-[310px] sm:w-full mx-auto overflow-x-auto rounded-lg">
            <pre className="relative whitespace-pre-wrap rounded-md bg-[#1e1e1e] p-4 text-white text-sm overflow-x-auto">
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

                 <Highlight
                                code={code.trim()}
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
            </pre>
        </div>
    );
}
