import React from 'react'
import { useSelector, UseSelector } from 'react-redux'

export default function Myprofile() {
    // now take th data form the redux store
    const name:string= useSelector((state)=>state.user.name)
    const email:string= useSelector((state)=>state.user.email)
   
  return (
    <div className='tetxt-black p-6'>
      <div>
        <div className='text-black font-bold text-4xl'>My profile</div>
      <div className='mt-5 flex justify-center items-center gap-3'>
        <div><div className='w-[5rem] h-[5rem] rounded-full bg-blue-800 flex justify-center font-thin text-white text-6xl'>vs</div></div>
        <div>
            <h6>{name}</h6>
            <h6>{email}</h6>
            <h6>9691268683</h6>
        </div>
      </div>
      </div>
    </div>
  )
}
