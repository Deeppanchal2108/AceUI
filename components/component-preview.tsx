import React from "react";
import { componentMap } from "./component-map";
export function ComponentPreview({ name }: { name: string }) {
    const Component = componentMap[name];


    if (!Component) {
        return <div className="text-red-500">Component "{name}" not exists .</div>;
    }
    return (
        <>
            <div className=" w-[310px] sm:max-w-full bg-zinc-950 min-h-[400px] mx-auto py-5 flex justify-center items-center 
    rounded-lg border border-gray-700 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 mt-14">

                <div className="w-full h-full flex justify-center items-center">
                    <Component className="" />
                </div>
            </div>

        </>
    )

}
