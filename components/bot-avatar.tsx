import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'

function BotAvatar() {
  return (
    <Avatar className="w-8 h-8">
    <AvatarImage className='p-1 object-cover' src="/logo.png"  />
    </Avatar>
   
  )
}

export default BotAvatar