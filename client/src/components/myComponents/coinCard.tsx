import React, { useState } from 'react'

export default function CoinCard({handledrawer}) {
    const [show,Setshow]=useState<boolean>(false)
  return (
    <div className='text-white  mx-1'>
     {!show?<div className='flex bg-slate-700 p-1 overflow-hidden' onMouseEnter={()=>Setshow(true)}>
        <div>
            <h2>MOG . USTD</h2>
            <h3>0.00000000001200 USTD</h3>
        </div>
        <div className='flex  justify-end items-center ml-10'>
            <div className=' w-10'>6.39%</div>
        </div>
      </div>:<div className='flex items-center bg-black p-1 overflow-hidden' onMouseLeave={()=>Setshow(false)}>
        <div>
            <h2>MOG . USTD</h2>
            <h3>0.00000000001200 USTD</h3>
        </div>
        <div>
            <div className='flex gap-3 w-full ml-2 justify-end'>
                <button type="button" className='p-2 w-6 rounded-sm bg-green-600 flex justify-center h-6 items-center hover:w-7 hover:h-7 transition-all delay-100' onClick={()=>handledrawer("buy")}>B</button>
                <button type="button" className='p-2 w-6 rounded-sm bg-red-600 flex justify-center h-6 items-center hover:w-7 hover:h-7 transition-all delay-100' onClick={()=>handledrawer("sell")}>S</button>
                
            </div>
        </div>
      </div>}
    </div>
  )
}
