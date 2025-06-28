"use client";

import { useEffect, useState } from "react";

import { componentMap } from "./component-map";



interface ComponentSourceProps {
    name: string;
}

export function ComponentSource({ name }: ComponentSourceProps) {
    const Component = componentMap[name];
if(!Component) {
        return <div className="text-red-500">Component "{name}" not found in componentMap.</div>;
    }
    const [code, setCode] = useState<string>("");

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

    return (
        <pre className="whitespace-pre-wrap rounded-md bg-slate-800 p-4 text-white text-sm overflow-x-auto">
            <code>{code}</code>
      </pre>
    );
}
