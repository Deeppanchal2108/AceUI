"use client";
import React, { useState } from 'react';
import {  Menu } from 'lucide-react';
import Link from 'next/link';
import { sidebar } from "@/lib/items"
import {
    Sheet,
    SheetContent,

    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

function MobileNavbar() {
    const path = usePathname()
    // console.log("Here is  the path : ", path)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <div className='md:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-500 m-0 text-white'>
                <div className='flex justify-between items-center p-4'>
                    <div className='flex items-center'>
                        <Link href="/" className='text-xl lg:text-2xl text-white font-mono tracking-tighter font-bold'>
                            AceUi
                        </Link>
                    </div>
                    <SheetTrigger asChild>
                        <button className="p-2  rounded-full">
                            <Menu className='w-6 h-6' />
                        </button>
                    </SheetTrigger>
                </div>
            </div>

            <SheetContent side="left" className="w-64 bg-black text-white border-r border-gray-500">
                <SheetHeader>
                    <SheetTitle > <Link href="/" className='text-xl lg:text-2xl text-white font-mono tracking-tighter font-bold'>
                        AceUi
                    </Link></SheetTitle>

                </SheetHeader>

                <SidebarGroup>
                    {sidebar.map((i, index) => (
                        <div key={index}>

                            <SidebarGroupLabel className="text-sm tracking-wide font-dmsans text-white font-bold pl-4 pr-2">
                                {i.title}
                            </SidebarGroupLabel>

                            <SidebarGroupContent>
                                <SidebarMenu className="flex flex-col ">
                                    {i.items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild className="w-full">
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`*:block w-full text-sm font-dmsans text-white font-medium px-4 text-left 
    hover:bg-transparent hover:shadow-none hover:text-white 
    transition-colors duration-300 
    focus:outline-none focus:ring-0 focus:bg-transparent 
    active:bg-transparent active:text-white
    visited:text-white
    ${path === item.href
                                                            ? "rounded-none bg-gradient-to-r from-[#1a1a1a] via-[#0f0f0f] to-black border-l-3 border-white shadow-lg"
                                                            : ""}`}
                                                >
                                                    {item.title}

                                                    {item.label ? (
                                                        <span className="ml-2 inline-block rounded-full bg-green-500 px-2 py-0.5 text-xs font-semibold text-white">
                                                            New
                                                        </span>
                                                    ) : ""}
                                                </Link>

                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </div>
                    ))}
                </SidebarGroup>

            </SheetContent>
        </Sheet>
    );
}

export default MobileNavbar;
