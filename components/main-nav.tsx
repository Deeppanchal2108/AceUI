import React from 'react'
import MobileNavbar from './mobile-nav'
import DesktopNavbar from './desktop-nav'
import Link from 'next/link'
async function Navbar() {
    
    return (
        <div className='min-w-full h-16 top-0 border-b bg-black m-0 z-40  text-white'>
            <div className='flex justify-around h-16 items-center '>

                <div className='flex items-center'>
                    <Link href={"/"} className=' text-xl lg:text-2xl  text-white font-mono tracking-tighter  font-bold '>
                        AceUi</Link>
                </div>
                <div className='flex items-center'>
                    <DesktopNavbar />
                    <MobileNavbar />
                </div>
            </div>


        </div>
    )
}

export default Navbar