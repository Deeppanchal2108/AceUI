import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/side-bar'

function layout({children}: {children: React.ReactNode}) {
    return (
        <SidebarProvider>
            <div className="min-h-screen  text-white flex flex-row">
                <AppSidebar/>
                {/* <SidebarTrigger /> */}
          <div className="flex-1 overflow-y-auto">
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none z-[-1]">
                  <div className="fixed top-0 right-0 w-[700px] h-[500px] pointer-events-none z-0
            bg-[linear-gradient(#222_1px,transparent_1px),linear-gradient(90deg,#222_1px,transparent_1px)]
            bg-[size:60px_60px] opacity-70 fade-diagonal-mask"/>
              </div>
              
              {children}
          </div>
      </div>


        </SidebarProvider>
    )
}

export default layout
