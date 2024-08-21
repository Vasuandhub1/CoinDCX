import React, { useState } from 'react'
import Auth from "../components/myComponents/auth"
import Register from '@/components/myComponents/register'
import axios from "axios"
 import {BASE_URL} from "../../constants"
 import Loader from '@/components/myComponents/loader'

export default function Authentication() {
  
  //  now design the interface
  interface registerType{
    fullname:string,
    email:string,
    phone:number,
    password:string
  }

  interface loginType{
    email:string,
    password:string
  }

  // now define the states
 const [register,SetRegister]=useState<registerType>(
  {fullname:"",
  email:"",
  phone:0,
  password:""
 })
 const [login,SetLogin]=useState<loginType>({
  email:"",
  password:""

 })
 const [loader,SetLoader]=useState<boolean>(false)
 const[toggle,Settoggle]=useState <boolean>(false)


//  now write the handler function
const handleRegister=(event):void=>{

  if(event.target.name==="fullname"){
    SetRegister({...register,fullname:event.target.value})
  }
  else if(event.target.name==="email"){
    SetRegister({...register,email:event.target.value})
  }
  else if(event.target.name==="phone"){
    SetRegister({...register,phone:event.target.value})
  }
  else{
    SetRegister({...register,password:event.target.value})
  }
  
}

const handleLogin=(event)=>{

  if(event.target.name=='password'){
    SetLogin({...login,password:event.target.value})
    
  }else{
    SetLogin({...login,email:event.target.value})
  }
}

const handelRegisterButton=async()=>{
  const req= await axios.post(`${BASE_URL}/register`,register,{withCredentials:true})
  SetLoader(true)
  setTimeout(()=>{
    console.log(req)
    SetLoader(false)
  },2000)
}
const handelLoginButton=async()=>{
  const req= await axios.post(`${BASE_URL}/login`,login,{withCredentials:true})
  SetLoader(true)
  setTimeout(()=>{
    console.log(req)
    SetLoader(false)
  },2000)
  
}



 const handleauth=()=>{
  if(!toggle){
    Settoggle(true)
  }else{
    Settoggle(false)
  }
 }

  return (
    <div className=' flex justify-center bg-gray-800 min-h-screen max-h-max'>
      <div className=' 2xl:flex  min-h-screen max-h-max  bg-gradient-to-r from-blue-500 to-purple-500" w-[50%] m-0 items-center p-0'>
        <div className=" flex justify-center items-center m-[30%]">
         <div className='flex flex-col'> <img src="https://coindcx.s3.amazonaws.com/static/images/c6f91f05-35a8-497e-8024-8dcb58a34f11/coindcx-logo.svg" alt="" />
         <img className='lg:min-w-[17rem] sm:min-w-[20rem] overflow-hidden' src="https://coindcx.s3.amazonaws.com/static/images/ea5eaa7f-1b2f-4d5c-b8f9-9af3a0b6e59d/Hero_image.svg" alt=""  />
         </div>
          </div>
      </div>
     
      {toggle? <div className='flex justify-center items-center w-[75%]'><Auth handleLoginButton={handelLoginButton} check={handleauth} loader={loader} login={login} handlelogin={handleLogin} /></div>: <div className='flex justify-center items-center w-[75%]'><Register check={handleauth} loader={loader} register={register} handelLoginButton={handelRegisterButton} handleRegister={handleRegister}/></div>}
    </div>
  )
}
