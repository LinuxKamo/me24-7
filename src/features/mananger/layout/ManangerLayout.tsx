import { memo } from 'react'
import { Outlet } from 'react-router-dom'

function ManangerLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc]">  
      {/* Sidebar */}
      {/* Main Content Area */}
      <main className="lg:ml-70 flex-1 overflow-y-auto">  
        <Outlet />
      </main>
    </div>
  )
}

export default memo(ManangerLayout)