import React from 'react'

export default function SubHead() {
  return (
    <div>
      <div className='flex h-[3.5rem] rounded-lg bg-slate-900 m-2 text-white' >
        <div className='w-[20%] bg-slate-700 rounded-s-lg flex items-center '>
          <img className='m-3' src="https://coindcx.s3.amazonaws.com/static/coins/btc.svg" alt="" />
          <div>
          <h2>bitcoin</h2>
          <h3>BTC</h3>
          </div>
          </div>
        <div>
        </div>
          <div className='flex gap-5 items-center'>
        <div className='flex items-center'><img className='w-8 m-3' src="https://coindcx.com/assets/icons/alert-bell-white.svg" alt="" /></div>
        <div className=''> 
          <p className=' text-xs'>last trade price</p>
          <p></p>
        </div>
        <div>
        <p className=' text-xs'>24h change</p>
        <p></p>
        </div>
        <div>
        <p className=' text-xs'>24h High</p>
        <p></p>
        </div>
        <div>
        <p className=' text-xs'>24h low</p>
        <p></p>
        </div>
        <div>
        <p className=' text-xs'>24h volume</p>
        <p></p>
        </div>
        <div>
        <p className=' text-xs'>wallet</p>
        <p></p>
        </div>
        </div>
        </div>
    </div>
  )
}
