"use client"
import FacebookLogin from '../../components/FacebookLogin'
import React from 'react'
import {signIn} from 'next-auth/react'
import { useState } from "react";

import ShareButtonExample from '../../components/ShareButtonExample';
const page = () => {
   
  return (

    <div className='bg-blue-800 h-screen flex items-center justify-center'>
        <FacebookLogin/>
        <ShareButtonExample/>
         <button onClick={signIn} >facebook</button> 
    </div>
  )
}

export default page