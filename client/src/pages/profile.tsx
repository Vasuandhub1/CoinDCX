import React from 'react'
import Myprofile from '@/components/myComponents/myprofile'
import HeadNavigation from '@/components/myComponents/headNavigation'

export default function Profile() {
  return (
    <div>
        <HeadNavigation/>
        <div className='flex'>
            <div className='w-[30%]'><hr /></div>
            <div>
                <div className='m-5'><Myprofile/></div>
            </div>
        </div>
      
    </div>
  )
}
