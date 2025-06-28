import React from "react";
import { componentMap } from "./component-map";
export function ComponentPreview({ name }: { name: string }) {
    const Component = componentMap[name];
  

    if (!Component) {
        return <div className="text-red-500">Component "{name}" not found in componentMap.</div>;
      }
    return (
        <>
            <div className="max-w-full bg-black min-h-[400px] mx-auto py-5 flex justify-center items-center 
    rounded-3xl border border-gray-700 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 my-14">

                <div className="w-full h-full flex justify-center items-center">
                    <Component className="" />
                </div>
            </div>

        </>
    )

}
  