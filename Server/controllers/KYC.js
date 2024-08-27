const upload_Image_KYC = require("../utils/imageUpload")
const user=require("../models/user")
const kyc=require("../models/kyc")
const {decodeToken}=require("../utils/jwt_token")
const { handleErr, handleRes, handleUnknownErr } = require("../utils/handleRes")

const know_your_customer=async(req,res,next)=>{
    try{

    
    // take the data froim the user
    const {adhaar,PAN,DOB}=req.body
    const {file}=req.files
    console.log(file,)
    // now take the user from the cookies
    const {coinDCX_Auth}=req.cookies

    // now decode the cookies
    if(coinDCX_Auth){
    const token=await decodeToken(coinDCX_Auth)
    

    // now check if user is preset 
    const isUser=await user.findById(token._id)



    if(adhaar && PAN &&DOB){
        if(isUser){
            const data=await upload_Image_KYC(file,res,next)
        
            const kyc_done=await kyc.create({PanCard:PAN,Adharcard:adhaar,selfie:data.url,DOB:DOB})
            await user.findByIdAndUpdate(isUser._id,{KYC:kyc_done._id})
            return next(handleRes(kyc_done,200,"KYC done sucessfully",res))

        }else{
            return next(handleErr(400,"plese Register the uier first",res))
        }
    }else{
        return next(handleErr(404,"plese fill all the details",res))
    }
}else{
    return next(handleErr(400,"please login the user",res))
}
}
catch(err){
    return next(handleErr(404,err.message,res))
}
    
    
}

module.exports={know_your_customer}