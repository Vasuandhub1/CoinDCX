import React,{useState} from 'react'
import Forgot_password_component from '@/components/myComponents/forgot_password_component'
import axios from 'axios'
import { BASE_URL } from '../../constants'

export default function ResetPassword() {
    const [loader,SetLoader]=useState<boolean>(false)
    const [email,Seteamil]=useState<string>("")

    const handelGetOTP=async()=>{
        console.log("hello")
        SetLoader(true)
        const  res=await axios.post(`${BASE_URL}/Reset_password`,{email},{withCredentials:true})
        setTimeout(()=>{
            SetLoader(false)
            console.log(res)
        },2000)
        
    }
    const handleemail=(event)=>{
        Seteamil(event.target.value)
    }

  return (
    <div>
      <div className=' flex justify-center bg-gray-800 min-h-screen max-h-max'>
      <div className=' 2xl:flex  min-h-screen max-h-max  bg-gradient-to-r from-blue-500 to-purple-500" w-[50%] m-0 items-center p-0'>
        <div className=" flex justify-center items-center m-[30%]">
         <div className='flex flex-col'> <img src="https://coindcx.s3.amazonaws.com/static/images/c6f91f05-35a8-497e-8024-8dcb58a34f11/coindcx-logo.svg" alt="" />
         <img className='lg:min-w-[17rem] sm:min-w-[20rem] overflow-hidden' src="https://coindcx.s3.amazonaws.com/static/images/ea5eaa7f-1b2f-4d5c-b8f9-9af3a0b6e59d/Hero_image.svg" alt=""  />
         </div>
          </div>
      </div>
     
       <div className='flex justify-center items-center w-[75%]'><Forgot_password_component handleemail={handleemail} email={email} loader={loader} handleGetOTP={handelGetOTP}/></div>
    </div> 
    </div>
  )
}
