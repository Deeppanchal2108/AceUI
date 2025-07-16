"use client"
import { sidebar } from "@/lib/items"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

import Link from "next/link"
export function AppSidebar() {
    const path = usePathname()
console.log("Here is  the path : ", path )
    return (
        <Sidebar className="h-screen w-56 pt-16 flex flex-col bg-black border-gray-500 ">
            <SidebarContent className="bg-black text-white">
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
            </SidebarContent>
        </Sidebar>
    );
}
