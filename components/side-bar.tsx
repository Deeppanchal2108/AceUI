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

import Link from "next/link"


export function AppSidebar() {
    return (
        <Sidebar className="h-screen w-56 pt-16  flex flex-col bg-black " >
            <SidebarContent className="bg-black text-white ">
                <SidebarGroup>

                    
                    {sidebar.map((i, index) => (
                        <div key={index} className="">
                            <SidebarGroupLabel className="text-xs uppercase tracking-wide px-5 text-zinc-500 " >{i.title}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu className="flex flex-col gap-1  px-5">
                                    {i.items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <Link href={item.href}>

                                                    <span className="text-sm font-medium font-jost text-white">{item.title}</span>
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
    )
}