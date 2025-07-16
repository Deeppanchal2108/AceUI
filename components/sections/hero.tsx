import React from 'react'


import { ArrowRight } from 'lucide-react';

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from '../magicui/animated-shiny-text';

export function AnimatedShinyTextDemo() {
    return (
        <div className="z-10 flex min-h-64 items-center justify-center">
            <div
                className={cn(
                    "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800"
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
      <div className='text-white w-full '>
          <AnimatedShinyTextDemo/>
    </div>
  )
}

export default Hero
