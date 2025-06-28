import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
      <div className="min-h-screen bg-black text-white flex flex-row">
          <div className="w-[400px] bg-slate-800 h-screen md:block hidden p-4">
              {/* Sidebar content here */}
          </div>
          <div className="flex-1 overflow-y-auto">
              {children}
          </div>
      </div>
  )
}

export default layout
