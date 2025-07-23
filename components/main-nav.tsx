import React from 'react'
import MobileNavbar from './mobile-nav'
import DesktopNavbar from './desktop-nav'
import Link from 'next/link'
import {
    SidebarProvider
} from './ui/sidebar'
async function Navbar() {
    
    return (
        <div className='min-w-full h-16 top-0 bg-black/80 backdrop-blur-md border-b border-gray-500 m-0 z-40  text-white'>
            <div className='flex justify-around h-16 items-center '>

                <div className='flex items-center'>
                    <Link href={"/"} className=' text-xl lg:text-2xl  text-white font-mono tracking-tighter  font-bold  hidden sm:block'>
                        AceUi</Link>
                </div>
                <div className='flex items-center'>
                    <DesktopNavbar />
                    <SidebarProvider>
                        <MobileNavbar />
                    </SidebarProvider>
                </div>
            </div>


        </div>
    )
}

export default Navbar