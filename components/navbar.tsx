import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './mobile-sidebar'

function Navbar({apiLimitCount}:{apiLimitCount : number}) {
  return (
    <div className='flex items-center p-4 bg-slate-200 mb-5'>
        <MobileSidebar apiLimitCount = {apiLimitCount}/>
        <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl='/'/>
        </div>
    </div>
  )
}

export default Navbar