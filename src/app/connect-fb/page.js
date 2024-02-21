"use client"
import FacebookLogin from '@/components/FacebookLogin'
import React from 'react'
import {signIn} from 'next-auth/react'
import { useState } from "react";
import { Button } from '@/components/ui/button';
import ShareButtonExample from '@/components/ShareButtonExample';
const page = () => {
    const [isLoading, setIsLoading] =useState(false)
    const login= async()=>{
        setIsLoading(true);
        try{
            await signIn('aacebook')
        }catch(error){
            //toast notification
             console.log(error)

        }finally{
            setIsLoading(false)
        }
    }
  return (

    <div className='bg-blue-800 h-screen flex items-center justify-center'>
        <FacebookLogin/>
        <ShareButtonExample/>
        {/* <Button onClick={()=>login()} isLoading={isLoading}>facebook</Button> */}
    </div>
  )
}

export default page