import React, { useState } from 'react'
import CoinCard from './coinCard'

export default function BitCoinList({handledrawer}) {
  // create the interface

  return (
    <div>
      <div className='w-[100%]'>
        <div className='flex justify-evenly items-center text-white  bg-slate-800 h-[2rem] mx-1 rounded-t-md'>
            <div>ALL</div>
            <div>INR</div>
            <div>BTC</div>
            <div>MORE</div>
        </div>
        <div className='text-white  mx-1 bg-slate-700 flex justify-center items-center p-2'>
                <input type="text" name="search" id="" className='border-2 border-slate-800 h-8 w-[15rem] rounded-md bg-slate-700 p-2' placeholder='Search for bit coins' />
            </div>
        <div className=' overflow-hidden hover:overflow-scroll h-[30rem]  no-scrollbar'>
       
            <CoinCard handledrawer={handledrawer}/>
            <CoinCard/>
            <CoinCard/>
            <CoinCard/>
            <CoinCard/>
            <CoinCard/>
            <CoinCard/>
            <CoinCard/>
            <CoinCard/>
            <CoinCard/>
            <CoinCard/>
            <CoinCard/>
        </div>
      </div>
    </div>
  )
}
