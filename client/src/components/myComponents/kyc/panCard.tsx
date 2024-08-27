import React from 'react'

import { Label } from "@/components/ui/label"
import { DatePickerDemo } from '../datePickerDemo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


export default function PanCard({handledata , handeldate , handlePanButton }) {
  return (
    <div className='p-[10rem]'>
      <div className='flex flex-col justify-evenly items-stretch gap-10'>
      <div className="grid w-full max-w-sm items-center gap-1.5 text-gray-600">
      <Label htmlFor="PAN">PAN card number</Label>
      <input type="PAN" onChange={handledata} name='PAN'  className=' border-gray border-2 rounded-lg w-[20rem] h-[2.5rem] text-lg p-4 ' id="PAN" placeholder="PAN card number" />
      
      <Label htmlFor="PAN" className='py-3'>PAN format :AAAAA999A</Label>
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5 text-gray-600">
      
     <DatePickerDemo handledate={handeldate} ></DatePickerDemo>
      <Label htmlFor="PAN" className='py-3'>Age must be above 18 years</Label>
    </div>
    <div>
       <Button className='bg-blue-700 w-[20rem]' onClick={handlePanButton}> continue</Button>
    </div>
      </div>
    </div>
  )
}
