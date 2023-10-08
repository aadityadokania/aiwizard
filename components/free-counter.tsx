"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card';
import { MAX_FREE_COUNTS } from '@/constants';
import { Progress } from './ui/progress';

interface FreeCounterProps {
    apiLimitCount: number;
  }

const FreeCounter = ({apiLimitCount= 0}:FreeCounterProps ) => {

    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    })

    if(!mounted){
        return null;
    }
  return (
    <div className='px-3'>
        <Card className='bg-white/10 border-0 mb-3'>
        <CardContent className='py-6'>
             <div className='text-center text-sm text-white mb-4 space-y-2'>
                <p>
                    {apiLimitCount} / {MAX_FREE_COUNTS} FREE GENERATIONS
                </p>
                <Progress className='h-3 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500' value={(apiLimitCount/MAX_FREE_COUNTS) * 100}/>
             </div>
             
        </CardContent>
        </Card>
    </div>
  )
}

export default FreeCounter