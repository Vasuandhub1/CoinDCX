import React,{useState} from 'react'
import Adhaar from '@/components/myComponents/kyc/adhaar'
import PanCard from '@/components/myComponents/kyc/panCard'
import Selfie from '@/components/myComponents/kyc/selfie'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BASE_URL } from '../../constants';
import axios from 'axios';
import Loader from '@/components/myComponents/loader';

export default function KnowYourCostumer() {
  // define all the structure
  interface struct{
    1:boolean,
    2:boolean,
    3:boolean
  }
   interface kycDetails{
    panNumber:string,
    date:Date,
    Adhaar:number,
    selfie:File|string
   }

  //create the useState
  const [kycdetails,SetKycDetails]=useState<kycDetails>({
    panNumber:"",
    date:new Date,
    Adhaar:0,
    selfie:""
  })
  
  const [formSelect,SetformSelect]=useState<struct>({
    1:true,
    2:false,
    3:false
  })

  const [Loader,SetLoader]=useState<boolean>(false)

  // functios for handeling the input form

  const handeldata=(event)=>{
    if(event.target.name=="PAN"){
      SetKycDetails({...kycdetails,panNumber:event.target.value})
    }else if(event.target.name=="adhaar"){
      SetKycDetails({...kycdetails,Adhaar:event.target.value})
    }else if(event.target.name=="file"){
      SetKycDetails({...kycdetails,selfie:event.target.files[0]})
    }
  }
  const handledate=(date)=>{
    SetKycDetails({...kycdetails,date:date})
  }
  const handlePanButton=()=>{
    // check
    if(!kycdetails.panNumber||!kycdetails.date){
      console.log("please enter the all the data")
    }else{
      SetformSelect({...formSelect,1:false,2:true,3:false})
    }
  }
  const handleAdhaarButton=()=>{
    // check
    if(!kycdetails.Adhaar ){
      console.log("please enter the all the data")
    }else{
      SetformSelect({...formSelect,1:false,2:false,3:true})
    }
  }

  const handleSubmit=async()=>{
    // const data={PAN:kycdetails.panNumber,
    //   Adhaar:kycdetails.Adhaar,
    //   DOB:kycdetails.date
    // }
    SetLoader(true)
    console.log("hello")
    const formdata=new FormData()
    formdata.append("PAN",kycdetails.panNumber)
    formdata.append("adhaar",kycdetails.Adhaar)
    formdata.append("DOB",kycdetails.date)
    formdata.append("file",kycdetails.selfie)
    const res=await axios.post(`${BASE_URL}/KYC`,formdata,{headers:{'Content-Type':'multipart/form-data'},withCredentials:true})
    if(res){
      SetLoader(false)
    }
  }

  console.log(kycdetails)
  
  
  return (
    <div className='bg-white min-w-full min-h-screen'>
      <div className='flex  justify-evenly'>
      <div className=''>sidecomponent
        <div className='flex flex-col items-stretch gap-8 p-[10rem]'>
        <div className={formSelect[1]?`bg-blue-200 rounded-lg p-[1rem] flex items-center gap-3 w-[13rem] border-s-4 border-blue-800 transition-all duration-100 font-bold`:`flex items-center gap-3 w-[13rem] p-[1rem] `}>
          <p className='bg-gray-100 rounded-full w-5 h-5 text-center text-xs'>1</p>  PAN details
          <MdOutlineKeyboardArrowRight />
        </div>
        <div  className={formSelect[2]?`bg-blue-200 rounded-lg p-[1rem] flex items-center gap-3 w-[13rem] border-s-4 border-blue-800 transition-all duration-100 font-bold`:`flex items-center gap-3 w-[13rem] p-[1rem] `}>
        <p className='bg-gray-100 rounded-full w-5 h-5 text-center text-xs'>2</p>  Adhaar details
        <MdOutlineKeyboardArrowRight />
        </div>
        <div  className={formSelect[3]?`bg-blue-200 rounded-lg p-[1rem] flex items-center gap-3 w-[13rem] border-s-4 border-blue-800 transition-all duration-100 font-bold`:`flex items-center gap-3 w-[13rem] p-[1rem] `}>
        <p className='bg-gray-100 rounded-full w-5 h-5 text-center text-xs'>3</p>  Selfie details
        <MdOutlineKeyboardArrowRight />
        </div>
        </div>
      </div>
      <div>main component
        {!formSelect[2]&&!formSelect[3]?<div><PanCard handlePanButton={handlePanButton} handledata={handeldata} handeldate={handledate}  /></div>:!formSelect[1]&&!formSelect[3]?<div><Adhaar handledata={handeldata} handleAdhaarButton={handleAdhaarButton}/></div>:<div><Selfie handledata={handeldata} handlesubmit={handleSubmit} loader={Loader} /></div> }

         
         

      </div>
      </div>
    </div>
  )
}
