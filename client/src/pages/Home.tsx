import React,{useEffect,useState} from 'react'
import webSocket from "../../utils/wsConnection"
import HeadNavigation from '@/components/myComponents/headNavigation'
import SubHead from '@/components/myComponents/subHead'
import BitCoinList from '@/components/myComponents/bitCoinList'
import Charts from "../components/myComponents/chart"
import BuySellDrawer from '@/components/myComponents/buySellDrawer'

export default function Home() {

  interface draw{
    buy:boolean,
    sell:boolean
  }

  const [drawer,Setdrawer]=useState<draw>({
    buy:false,
    sell:false
  })

  // create the function to handel the drawer
  const handeldrawer=(param)=>{
    if(param==="buy"){
      if(drawer.buy===false){
        Setdrawer({...drawer,buy:true})
        // Setdrawer({...drawer,sell:false})
      }else{
        Setdrawer({...drawer,buy:false})
        // Setdrawer({...drawer,sell:true})
      }
    }else{
      if(drawer.sell===false){
        Setdrawer({...drawer,sell:true})
        // Setdrawer({...drawer,buy:false})
      }else{
        Setdrawer({...drawer,sell:false})
        // Setdrawer({...drawer,buy:true})
      }
    }
    if(drawer.buy===true && drawer.sell===true){
      Setdrawer({...drawer,sell:false})
      Setdrawer({...drawer,buy:false})
    }
  }

  console.log(drawer)

  useEffect(()=>{
    webSocket()
    
  },[])
  return (
    <div className='bg-slate-950  min-h-screen max-h-max'>
      <HeadNavigation/>
      <SubHead/>
      <div className='w-full flex flex-wrap'>
      <BitCoinList handledrawer={handeldrawer}/>
      <Charts/>
      </div>
      

      <h1>Home</h1>
      <BuySellDrawer drawer={drawer}/>
    </div>
  )
}
