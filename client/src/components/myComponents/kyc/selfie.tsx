import React from 'react'
import { Label } from '@/components/ui/label'
// import { Input} from '@/components/ui/input'
import { DatePickerDemo } from '../datePickerDemo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Loader from '../loader'


export default function Selfie({handledata,handlesubmit,loader}) {
  return (
    <div className='p-[10rem]'>
      <div className='flex flex-col justify-evenly items-stretch gap-10'>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" name="file" onChange={handledata} />
    </div>
    
    <div>
       {!loader?<Button className='bg-blue-700 w-[20rem]' onClick={handlesubmit}> Submit</Button>:<Loader/>}
    </div>
      </div>
    </div>
  )
}
