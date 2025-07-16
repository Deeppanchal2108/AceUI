import React from 'react'


import { ArrowRight } from 'lucide-react';

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from '../magicui/animated-shiny-text';

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

function Hero() {
  return (
      <div className='text-white w-full mt-22 flex justify-center items-center flex-col'>
          <AnimatedShinyTextDemo />
          <h1 className='  font-pop  text-white text-3xl md:text-5xl font-semibold leading-tighter text-center  tracking-tight mb-4'>
              <span>Ace your frontend with sleek </span><br/>
                  <span> production-ready components</span>
          </h1>
          <h4 className=' font-pop  text-white text-sm md:text-md font-semibold leading-tighter text-center  tracking-tight mb-4'>
              <span> Redefined UI building for developers. Quickly add components, themes,</span>
              <span> and responsive layouts to your app at any scale.</span>
             
          </h4>
    </div>
  )
}

export default Hero
