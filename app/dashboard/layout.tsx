import LeftSidebar from '@/components/dashboard/left-sidebar'
import { Protect } from '@clerk/nextjs'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return  (
    <Protect>
    <div className="min-h-screen w-full">
      <div className='flex'>
        <LeftSidebar />
        <div className="flex-1"> {children}</div>
      </div>

    </div>
    </Protect>
  )
}

export default layout