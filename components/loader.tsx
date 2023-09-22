import React from 'react'
import Image from 'next/image';

function Loader() {
  return (
    <div className='h-full flex flex-co gap-y-4 items-center'>
        <div className='w-10 h-10 relative animate-spin'>
            <Image alt="logo" fill src="/logo.png" className='object-cover'/>
        </div>
        <p className='text-sm text-muted-foreground pl-5'>
            Ai Wizard is Thinking...
        </p>
    </div>
  )
}

export default Loader