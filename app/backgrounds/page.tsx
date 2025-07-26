"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ace-ui/Kbd";
import { SpotLight } from "@/components/ace-ui/SpotLight";
import { Tooltip } from "@/components/ace-ui/ToolTip";

import { UserCard } from "@/components/ace-ui/UserCard";

import ImageText from "@/components/ace-ui/ImageText";

import { FeedbackWidget } from "@/components/ace-ui/FeedbackWidget";
function Page() {
    

    return (
        <div className=" text-white bg-black font-sans px-4 py-10">
            {/* <div className="fixed bottom-6 right-6 z-50">
                <FeedbackWidget />
            </div>
            */}
            {/* <div>
                <ImageText text="AceUi"  backgroundImage="/image-text.jpg" />
            </div> */}

            {/* <div className="max-w-sm mx-auto mt-10">
                <UserCard
                    avatarSrc="/banner-in.png"
                    name="Jane Doe"
                    description="Product Designer"
                />
            </div> */}
            {/* <Tooltip side="bottom" align="center" content="Copy to clipboard">
                <Button className="rounded bg-neutral-800 px-2 py-1 text-white">
                    📋 Copy
                </Button>
            </Tooltip> */}
            {/* <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[120px]">Open Command Palette:</span>
                <Kbd size="md" keys={["command","delete", "p"]} />
            </div> */}

            {/* <SpotLight className='h-52 w-40 flex justify-center items-center bg-black border border-white ' spotlightColor='rgba(151, 151, 151, 0.1)'>
                Hover me
            </SpotLight> */}
        </div>
        // <div className="w-full text-white min-h-screen relative bg-black font-sans">
          
        //     <div
        //         className="absolute inset-0 z-0"
        //         style={{
        //             background:
        //                 "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
        //         }}
        //     />

        //     <div className="relative z-10 flex flex-col items-center w-full text-center pt-16 px-4 gap-y-2">
        //         <SparklesText
        //             sparklesCount={5}
        //             colors={{ first: "#FFD700", second: "#FAD6A5" }}
        //             className="text-4xl sm:text-5xl font-semibold font-jost tracking-tight"
        //         >
        //             Bring Your UI to Life
        //         </SparklesText>
        //         <p className="text-base sm:text-lg text-gray-300 font-medium font-dmsans max-w-md">
        //             Vibrant backgrounds crafted with Tailwind & CSS.
        //         </p>
        //     </div>

        //     <div className="relative text-white">
                
        //         <ShowPattern pattern={pattern} setPattern={setPattern} />

        //     </div>
        // </div>
    );
}

export default Page;
