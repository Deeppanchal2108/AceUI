import React from "react";
import { componentMap } from "./component-map";
export function ComponentPreview({ name }: { name: string }) {
    const Component = componentMap[name];
    console.log("ComponentPreview rendered for:", Component);

    if (!Component) {
        return <div className="text-red-500">Component "{name}" not found in componentMap.</div>;
      }
    return (
        <><h2>{name +" Demo is here "}</h2>
            <Component />
        </>
    )

}
  