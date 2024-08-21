import React from 'react'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import Loader from './loader'

export default function Forgot_password_component({loader,handleGetOTP,email,handleemail}) {
    console.log(email)
  return (
    <div className='  flex items-center justify-center p-[5%] bg-gray-700 rounded-lg m-[5%] w-[50%] font-mono'>
    <div className='flex flex-col justify-center items-center gap-5 '>
    <div className='font-mono text-4xl text-white'>
       Reset Password
     </div>
     <div><img src="https://www.svgrepo.com/show/165196/user.svg" alt="hello" width={"100px"} height={"100px"}/></div> 

     <div id='parent' className='flex flex-col m-[10px] gap-5'>
     <div className="grid w-full max-w-sm items-center gap-1.5">
     <Label htmlFor="email" className='text-white font-monon font-semibold'>Email</Label>
     <Input type="email" name='email' onChange={handleemail} value={email} id="email" placeholder="Email" />
   </div>
   <div>
    {!loader?<Button onClick={handleGetOTP}  className='font-mono font-semibold'> Get OTP on above email</Button>:<Loader></Loader>}
   </div>
     

     </div>
    </div>
   </div>
  )
}
