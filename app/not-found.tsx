import React from 'react'
import Link from 'next/link'
function NotFound() {
    return (
        <div className='text-white relative w-full h-screen '>
            <div className='w-full h-screen flex justify-center items-center'>
                <h3 className='text-xl  md:text-2xl font-bold tracking-tight font-pop text-center text-neutral-500'>
                    <Link href='/' >back to home</Link>
                </h3>

            </div>

            <div className='absolute bottom-0 w-full left-0   p-10 pb-20 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-end text-center sm:text-left '>
                <div className='text-7xl sm:text-8xl font-bold font-dmsans'>404</div>
                <div className=' max-w-xs sm:max-w-[280px] text-md font-dmsans text-medium  tracking-tight'>indicates that the browser was able to
                    communicate with the server , but the server could not find what was requested resource.</div>
            </div>
            
        </div>


    )
}

export default NotFound
