"use client"
import React from "react";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { useState } from "react";
import ShowPattern from "@/components/show-pattern";



function Page() {
    const [pattern, setPattern] = useState<string | null>(null)
    
    return (
        <div className="w-full text-white min-h-screen relative bg-black font-sans">
          
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
                }}
            />

            <div className="relative z-10 flex flex-col items-center w-full text-center pt-16 px-4 gap-y-2">
                <SparklesText
                    sparklesCount={5}
                    colors={{ first: "#FFD700", second: "#FAD6A5" }}
                    className="text-4xl sm:text-5xl font-semibold font-jost tracking-tight"
                >
                    Bring Your UI to Life
                </SparklesText>
                <p className="text-base sm:text-lg text-gray-300 font-medium font-dmsans max-w-md">
                    Vibrant backgrounds crafted with Tailwind & CSS.
                </p>
            </div>

            <div className="relative text-white">
                
                <ShowPattern pattern={pattern} setPattern={setPattern} />

            </div>
        </div>
    );
}

export default Page;
