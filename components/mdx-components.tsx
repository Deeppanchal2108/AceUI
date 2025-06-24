"use client";

import { useMDXComponent } from "@content-collections/mdx/react"; // OR "@mdx-js/react" depending
// import * as UI from "../components/ui";
 import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";

const components = {
ComponentPreview,
    ComponentSource,
};

export function Mdx({ code }: { code: string }) {
    const Component = useMDXComponent(code);
    return <Component components={components} />;
}
