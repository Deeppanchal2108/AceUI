"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import CommandMenu from './command';
import { cn } from '@/lib/utils';

function DesktopNavbar() {

    const [open, setOpen] = useState(false);
    return (
        <div className='hidden md:block'>
            {
                <div className=' flex flex-row gap-x-4'>
                    <Link href={"/introduction"}>
                        <Button className='hover:bg-transparent  hover:shadow-none hover:cursor-pointer hover:text-gray-300 transition-colors duration-300 text-sm font-semibold font-dmsans' variant={"ghost"}>

                            Docs
                        </Button>
                    </Link>
                    <Link href={"/components/text-scramble"}>
                        <Button className='hover:bg-transparent hover:shadow-none hover:cursor-pointer hover:text-gray-300 transition-colors duration-300 text-sm font-semibold font-dmsans' variant={"ghost"}>

                            Components
                        </Button>
                    </Link>
                    <Link href={"/backgrounds"}>
                        <Button className='hover:bg-transparent  hover:shadow-none hover:cursor-pointer hover:text-gray-300 transition-colors duration-300 text-sm font-semibold font-dmsans' variant={"ghost"}>
                            Backgrounds


                        </Button>
                    </Link>


                    <div>

                        <Button
                            variant="outline"
                            className={cn(

                                "text-white border-[#2A2A2A]  box-shadow: 0 0 0 2px #4C9AFF bg-[#121212] mt-0.5 ",
                                "relative h-8 w-full justify-start rounded-[0.5rem] bg-grey-950  text-sm font-normal  shadow-none sm:pr-12 md:w-40 lg:w-64 hover:bg-[#121212] hover:text-white ",
                            )}
                            onClick={() => setOpen(true)}

                        >
                            <span className="hidden lg:inline-flex text-sm  ">Search documentation...</span>
                            <span className="inline-flex lg:hidden text-sm">Search...</span>
                            <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border  px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex bg-gray-950 hover:bg-gray-950 ">
                                <span className="text-xs">⌘</span>K
                            </kbd>
                        </Button>
                        <CommandMenu open={open} setOpen={setOpen} />

                    </div>



                </div>
            }
        </div>
    )
}

export default DesktopNavbar