import React from 'react'
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from '../magicui/animated-shiny-text';
import { motion } from "motion/react"

export function AnimatedShinyTextDemo() {
    return (
        <div className="z-10 flex  items-center justify-center mb-2">
            <div
                className={cn(
                    "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-gray-500 bg-black hover:bg-black/90"
                )}
            >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-200 hover:duration-300 text-white hover:dark:text-neutral-300">
                    
                    <span className="text-sm font-semibold tracking-normal">
                        ✨ Introducing AceUi
                    </span>
                    <ArrowRight className="ml-2 size-5 rounded-full bg-neutral-800 p-1 text-white group-hover:translate-x-0.5 transition-transform duration-300 ease-in-out" />
                </AnimatedShinyText>
            </div>
        </div>

    );
}


export function AnimatedSubscribeButtonDemo() {
    return (
        <AnimatedSubscribeButton className="w-50">
            <span className="group inline-flex items-center text-sm  font-jost ">
                Browse Components
                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center text-sm  font-jost ">
                Browse Components
                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
        </AnimatedSubscribeButton>
    );
}

function Hero() {
  return (
      <div className='text-white w-full mt-22 flex justify-center items-center flex-col'>
          <AnimatedShinyTextDemo />
          <h1 className='  font-pop  text-white text-3xl md:text-5xl font-semibold leading-tighter text-center  tracking-tight mb-4'>
              <span>Ace your frontend with sleek </span><br/>
                  <span> production-ready components</span>
          </h1>
          <h4 className=' font-pop  text-white text-md md:text-lg  text-center  tracking-tight mb-4 leading-tight  '>
              <div className=' text-gray-300'> Redefined UI building for developers. Quickly add
                  
                  <span className=' font-semibold  text-gray-200 underline decoration-[0.2px]  underline-offset-4 decoration-gray-600'><Link href={"/components/text-scramble"}> components</Link></span> , <span className=' font-semibold  text-gray-200 underline decoration-[0.2px]  underline-offset-4 decoration-gray-600'><Link href={"/backgrounds"}>themes</Link></span>, and <span className=' font-semibold  text-gray-200 underline decoration-[0.2px]  underline-offset-4 decoration-gray-600'><Link href={"/"}>responsive</Link></span> </div>
              <div className=' text-gray-300'> <span className=' font-semibold  text-gray-200 underline decoration-[0.2px]  underline-offset-4 decoration-gray-600'><Link href={"/"}> layouts</Link> </span>  to your app at any scale — built with modern CSS and Tailwind, ready to elevate any project.</div>
           
             
          </h4>
          <div className='flex flex-row gap-3'>
              <Button className='bg-white text-black hover:bg-white hover:text-black text-[15px] font-md font-pop'>Get Started </Button>
             <AnimatedSubscribeButtonDemo/>
              
          </div>

          
    </div>
  )
}

export default Hero
