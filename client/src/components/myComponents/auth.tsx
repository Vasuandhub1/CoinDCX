import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import { NavLink } from 'react-router-dom'
import Loader from './loader'

export default function Auth({check,handlelogin,login,loader,handleLoginButton}) {

  return (
    <div className='  flex items-center justify-center p-[5%] bg-gray-700 rounded-lg m-[5%] w-[50%] overflow-hidden font-mono'>
     <div className='flex flex-col justify-center items-center gap-5 '>
     <div className='font-mono text-4xl text-white'>
        Login
      </div>
      <div><img src="https://www.svgrepo.com/show/165196/user.svg" alt="hello" width={"100px"} height={"100px"}/></div> 

      <div id='parent' className='flex flex-col m-[10px] gap-5'>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className='text-white font-monon font-semibold w-90'>Email</Label>
      <Input type="email" onChange={handlelogin} name="email" id="email" placeholder="Email" />
    </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className='text-white font-monon font-semibold' >Password</Label>
      <Input type="password" onChange={handlelogin} name="password" id="password" placeholder="password" />
    </div>
    <div><NavLink to={"/ResetPassword"} className='text-white font-mono'>Forgot Password ?</NavLink></div>
    {!loader?<Button onClick={handleLoginButton} className='font-mono font-semibold'>Login with Email</Button>:<Loader/>}
    <div><p  className='flex gap-2 text-white font-mono'>Not registered yet? <p onClick={check} className=' text-blue-400 font-semibold font-mono hover:cursor-pointer'> Create Account</p>
    </p></div>

      </div>
     </div>
    </div>
  )
}
