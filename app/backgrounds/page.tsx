"use client"
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Kbd } from "@/components/ace-ui/Kbd";
// import { SpotLight } from "@/components/ace-ui/SpotLight";
// import { Tooltip } from "@/components/ace-ui/ToolTip";

// import {
//     List,
//     Bookmark,
//     DollarSign,
//     Shield,
//     MessageSquare,
//     Briefcase,
//     Plus,
//     Settings,
//     MoreHorizontal,
//     User
// } from 'lucide-react';
import {ParticleBackground} from "@/components/ace-ui/ParticleBackground";


// import { UserCard } from "@/components/ace-ui/UserCard";

// import ImageText from "@/components/ace-ui/ImageText";

// import { FeedbackWidget } from "@/components/ace-ui/FeedbackWidget";
// import {DropdownMenu} from "@/components/ace-ui/DropdownMenu";
function Page() {
    
    // const defaultMenuItems = [
    //     { icon: List, label: 'Lists', id: 'lists' },
    //     { icon: Bookmark, label: 'Bookmarks', id: 'bookmarks' },
    //     { icon: DollarSign, label: 'Monetization', id: 'monetization' },
    //     { icon: Shield, label: 'Verified Orgs', id: 'verified' },
    //     { icon: MessageSquare, label: 'Ads', id: 'ads' },
    //     { icon: Briefcase, label: 'Jobs', id: 'jobs' },
    //     { icon: Plus, label: 'Create your Space', id: 'create-space' },
    //     { icon: Settings, label: 'Settings and privacy', id: 'settings' },
    // ];

    // const customMenuItems = [
    //     { icon: User, label: 'Profile', id: 'profile' },
    //     { icon: Settings, label: 'Settings', id: 'settings' },
    //     { icon: Briefcase, label: 'Dashboard', id: 'dashboard' },
    // ];
    return (
        <div className=" text-white bg-black font-sans px-4 py-10">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">


                <div className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
                    {/* The ParticleBackground component acts as the background */}
                    <ParticleBackground
                        direction="top-to-bottom"
                        speed={50} // 50 pixels per second
                        maxParticles={150}
                        dotsEnabled={true}
                        dotColor="#a78bfa" // Purple dots
                        dotSize={2}
                        dotOpacity={0.6}
                        linesEnabled={true}
                        lineColor="#60a5fa" // Blue lines
                        lineWidth={1}
                        lineLength={8}
                        lineOpacity={0.5}
                        backgroundColor="#0f0f0f" // Dark background
                        glow={true}
                        fadeEdges={true}
                    />

                    {/* Your content goes here, on top of the background */}
                    <div className="relative z-10 text-center p-8 bg-black/30 rounded-lg backdrop-blur-sm border border-gray-700 shadow-lg">
                        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            Welcome to the Flow
                        </h1>
                        <p className="text-lg text-gray-200">This is a simple, optimized particle background.</p>
                        <p className="text-sm mt-2 text-gray-400">
                            You should now see small dots and lines traveling from left to right, with a subtle glow.
                        </p>
                    </div>
                </div>
                             {/* <Tooltip side="bottom" align="center" content="Copy to clipboard">
                    <Button className="rounded bg-neutral-800 px-2 py-1 text-white">
                        📋 Copy
                    </Button>
            </Tooltip> */}
                
                {/* <Tooltip side="bottom" align="center" content="Copy to clipboard">
                <Button className="rounded bg-neutral-800 px-2 py-1 text-white">
                    📋 Copy
                </Button>
            </Tooltip> */}

                {/* <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Default Style</h3>
                    <div className="flex justify-center">
                        <DropdownMenu
                            menuItems={defaultMenuItems}
                            buttonHref="/create-post"
                        />
                    </div>
                </div> */}

                {/* <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Disabled</h3>
                    <div className="flex justify-center">
                        <DropdownMenu
                            menuItems={customMenuItems}
                            disabled={true}
                        />
                    </div>
                </div> */}
{/* 
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Right Aligned</h3>
                    <div className="flex justify-end">
                        <DropdownMenu
                            triggerText="Options"
                            menuItems={customMenuItems.slice(0, 3)}
                            buttonText="Apply"
                            buttonHref="/apply"
                            position="right"
                        />
                    </div>
                </div> */}

                {/* <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Compact</h3>
                    <div className="flex justify-center">
                        <DropdownMenu
                            triggerText="Menu"
                            menuItems={customMenuItems.slice(0, 3)}
                            buttonText=""
                            width="w-56"
                            triggerClassName="px-4 py-2 text-sm"
                            itemClassName="px-4 py-3"
                        />
                    </div>
                </div> */}

            
            </div>
        </div>
    );
           
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
         
            {/* <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[120px]">Open Command Palette:</span>
                <Kbd size="md" keys={["command","delete", "p"]} />
            </div> */}

            
       
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
   
}

export default Page;
