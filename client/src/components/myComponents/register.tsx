import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import Loader from './loader'



export default function Register({check,register,handleRegister,handelLoginButton,loader}) {
    console.log(register)
  return (
    <div className='  flex items-center justify-center p-[10%] bg-gray-700 rounded-lg m-[5%] w-[50%] overflow-hidden font-mono'>
     <div className='flex flex-col justify-center items-center gap-5 '>
     <div className='font-mono text-4xl text-white'>
        Register
      </div>
      <div><img src="https://www.svgrepo.com/show/165196/user.svg" alt="hello" width={"100px"} height={"100px"}/></div> 

      <div id='parent' className='flex flex-col m-[10px] gap-5'>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="fullname" className='text-white font-monon font-semibold' >Fullname</Label>
      <Input type="fullname" onChange={handleRegister} name="fullname" id="fullname" placeholder="Fullname" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="number" className='text-white font-monon font-semibold' >Phone</Label>
      <Input type="number" onChange={handleRegister} name="phone" id="number" placeholder="phone" />
    </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className='text-white font-monon font-semibold'>Email</Label>
      <Input type="email" onChange={handleRegister} id="email" name="email" placeholder="Email" />
    </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password" className='text-white font-monon font-semibold' >Password</Label>
      <Input type="password" onChange={handleRegister} id="password" name='password' placeholder="password" />
    </div>
      
    {/* <div><a href="" className='text-white font-mono'>Forgot Password ?</a></div> */}
   {!loader?<Button className='font-mono font-semibold' onClick={handelLoginButton}>Register</Button>:<Loader></Loader>}
    <div><p  className='flex gap-2 text-white font-mono'>Already registered ? <p onClick={check} className=' text-blue-400 font-semibold font-mono hover:cursor-pointer'>LogIn</p>
    </p></div>

      </div>
     </div>
    </div>
  )
}
