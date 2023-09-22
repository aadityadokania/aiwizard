import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './mobile-sidebar'

function Navbar() {
  return (
    <div className='flex items-center p-4 bg-slate-200 mb-5'>
        <MobileSidebar/>
        <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl='/'/>
        </div>
    </div>
  )
}

export default Navbar