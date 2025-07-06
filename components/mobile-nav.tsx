"use client"
import React, { useState } from 'react';
import { LogOut, CircleUser, Bell, Home, UsersRound, SquarePen, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
function MobileNavbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='md:hidden fixed top-0 left-0 right-0 z-50 bg-black border-b'>
            <div className='flex justify-between items-center p-4'>
                <div className='flex items-center'>
                    <Link href={"/"} className='text-xl lg:text-2xl font-mono tracking-tighter text-primary font-bold'>
                        HiveMind
                    </Link>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-full">
                    <Menu className='w-6 h-6' />
                </button>
            </div>
            {isOpen && (
                <div className='fixed inset-0 bg-white z-50'>
                    <div className='flex flex-col h-full'>
                        <div className='flex justify-between items-center p-4 border-b'>
                            <div className='flex items-center'>
                                <Link href={"/"} className='text-xl lg:text-2xl font-mono tracking-tighter text-primary font-bold'>
                                    HiveMind
                                </Link>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                <X className='w-6 h-6' />
                            </button>
                        </div>

                        <div className='flex-1 overflow-y-auto p-4'>
                            <nav className='flex flex-col space-y-2'>
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    <Button variant="ghost" className='w-full justify-start gap-2'>
                                        <Home size={20} /> Home
                                    </Button>
                                </Link>
                                <Link href="/spaces" onClick={() => setIsOpen(false)}>
                                    <Button variant="ghost" className='w-full justify-start gap-2'>
                                        <UsersRound size={20} /> Spaces
                                    </Button>
                                </Link>
                                <Link href="/new-story" onClick={() => setIsOpen(false)}>
                                    <Button variant="ghost" className='w-full justify-start gap-2'>
                                        <SquarePen size={20} /> Write
                                    </Button>
                                </Link>

                               
                            </nav>
                        </div>

                       
                    </div>
                </div>
            )}
        </div>
    );
}

export default MobileNavbar;