

import React from "react"
import { useState } from "react"
import Loader from "./loader"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function Verify_email_component() {
  const [value, setValue] = useState<string>("")
  const [loder, Setloader] = useState<boolean>(false)
  console.log(value)
  return (
    <div className="space-y-2 font-mono flex flex-col justify-center items-center text-white">
        {!loder?<h3 >Enter OTP Send on your email account</h3>:<h3 >Verifying OTP</h3>}
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => {setValue(value)
            if(value.length>=6){
                Setloader(true)
                setTimeout(()=>{
                    Setloader(false)
                },5000)
            }
        }}
      >
        {!loder?<InputOTPGroup>
          <InputOTPSlot index={0} className="bg-gray-700 text-white" />
          <InputOTPSlot index={1}  className="bg-gray-700 text-white"  />
          <InputOTPSlot index={2}  className="bg-gray-700 text-white" />
          <InputOTPSlot index={3}  className="bg-gray-700 text-white" />
          <InputOTPSlot index={4}  className="bg-gray-700 text-white" />
          <InputOTPSlot index={5}  className="bg-gray-700 text-white" />
        </InputOTPGroup>
     :<Loader></Loader>}
      </InputOTP>
      <div className="text-center text-sm">
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered OTP: {value}</>
        )}
      </div>
    </div>
  )
}

