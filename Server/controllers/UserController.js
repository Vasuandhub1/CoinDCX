const {generateToken,decodeToken}= require("../utils/jwt_token")
const {handleErr, handleRes , handleUnknownErr}= require("../utils/handleRes")
const email_verification=require("../utils/email_verification")
const onetimepassword= require("../utils/generate_otp")
const user = require("../models/user")



const Register_user=async(req,res,next)=>{
    try{
        const {email,password,fullname}= req.body

        if(email&&password&&fullname){

            // now check if the email is present in the database

            const isAlredyRegistered= await user.findOne({email:email})
            if(isAlredyRegistered){
                return next(handleErr(400,"User already registered",res))
            }
            //  now create the user     
           const isCreated=await user.create({fullname:fullname,email:email,password:password,isVerified:false})

           if(isCreated){

          // now generate the ontime password
          const OTP=onetimepassword()
          await user.findByIdAndUpdate(isCreated._id,{verify:OTP,verify_Expiry:new Date()})
            //  now create the new verification toke for mail verification
            const ismail_send= email_verification(OTP,email)
            console.log(ismail_send)
            if(ismail_send){
                // now generate a token to check if user in present in the db
                const payload={
                    _id:isCreated._id,
                    email:isCreated.email,
                    expiresIn:new Date()
                }
               const token=await  generateToken(payload)

                // now send the cookie and respons
                res.cookie("coinDCX_Verify",token,{expiresIn:"2h"})
                
                next(handleRes("Created User Sucessful",200,"sucessful",res))

            }else{
                return next(handleErr(400,"Err in seding email verification please your email credentials",res))
            }
            
            
        }else{
          return  next(handleErr(404,"Pleas enter all the details",res))
        }
    }else{
        return naxt(handleErr(403,"Err in creatring User",res))

    }
    }catch(err){
        console.log(err)
     return  next( handleErr(404,err.message,res))
    }
}

const Email_verification=async(req,res,next)=>{
    try{
        // now take the One time password from the user 
        
        const {OTP}=req.body

        //check for the OTP 
        const {coinDCX_Verify}= req.cookies
        
        if(coinDCX_Verify){
            // now verify the token
        const token=await decodeToken(coinDCX_Verify)   
        // now find the user belongs from otp
        const isUser=await user.findById(token._id) 
        if(isUser){

            // now match both the otp and the user otp
            if(OTP===isUser.verify){
                await user.findByIdAndUpdate(isUser._id,{isVerified:true,verify:0})
                return next(handleRes(true,200,"Email verified sucessful",res))
            }else{
                return next(handleErr(400,"Check the OTP in your mail box",res))
            }
        }else{
            return next(handleErr(404,"User does not exist, pleae create User",res))
        }
        }else{
            return next(handleErr(400,"your OTP Expired",res))
        }

    }catch(err){
        next(handleErr(401,err.message,res))
    }
}

const login_user=async(req,res,next)=>{
    try{
        // now take the credentials
        const {email,password}=req.body

        if(email&&password){

            // now check if the email is registered

            const isRegistered = await user.findOne({email:email})
            if(isRegistered){

                // now check if the user email is verified
                if(!isRegistered.isVerified){
                    // now we have to redires user to the      
                    const OTP=onetimepassword()
                    await user.findByIdAndUpdate(isCreated._id,{verify:OTP,verify_Expiry:new Date()})
                      //  now create the new verification toke for mail verification
                      const ismail_send= email_verification(OTP,email)
                      console.log(ismail_send)
                      if(ismail_send){
                          // now generate a token to check if user in present in the db
                          const payload={
                              _id:isCreated._id,
                              email:isCreated.email,
                              expiresIn:new Date()
                          }
                         const token=await  generateToken(payload)
          
                          // now send the cookie and respons
                          res.cookie("coinDCX_Verify",token,{expiresIn:"2h"})
                          
                          next(handleRes("Created User Sucessful",200,"sucessful",res))
          
                      }else{
                          return next(handleErr(400,"Err in seding email verification please your email credentials",res))
                      }
                }else{
                    // now check the user password 
                    const checkPassword= await isRegistered.comparePassword(password)
                    if(checkPassword){
                        // now generate auth token to authenticate the user

                        const payload={
                            _id:isRegistered._id,
                            email:isRegistered.email,
                            fullname:isRegistered.fullname,
                        }
                       const token = await generateToken(payload)
                        // now send the token in the cookie and 

                        res.cookie("coinDCX_Auth",token,{expiresIn:"2d"})
                        return next(handleRes(true,200,"login Sucessful",res))
                       
                    }else{
                        return next(handleErr(400,"please check your Credentials",res))
                    }
                }
            }else{
                return next(handleErr(400,"please Register", res))
            }
        }else{
            return next(handleErr(402,"please enter all the credentias",res))
        }

    }catch(err){
        return next(handleUnknownErr(err.message))
    }
}

module.exports={Register_user,Email_verification,login_user}