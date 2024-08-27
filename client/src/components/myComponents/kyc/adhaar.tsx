import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePickerDemo } from '../datePickerDemo'
import { Button } from '@/components/ui/button'
export default function Adhaar({handledata, handleAdhaarButton}) {
  return (
    <div className='p-[10rem]'>
      <div className='flex flex-col justify-evenly items-stretch gap-10'>
      <div className="grid w-full max-w-sm items-center gap-1.5 text-gray-600">
      <Label htmlFor="PAN">Adhaar card number</Label>
      <input type="PAN" name='adhaar'  onChange={handledata} className=' border-gray border-2 rounded-lg w-[20rem] h-[2.5rem] text-lg p-4 ' id="PAN" placeholder="Adhaar no" />
      
      <Label htmlFor="PAN" className='py-3'>Adhaar format : 325463XXXX</Label>
    </div>
   
    <div>
       <Button className='bg-blue-700 w-[20rem]' onClick={handleAdhaarButton}> continue</Button>
    </div>
      </div>
    </div>
  )
}
