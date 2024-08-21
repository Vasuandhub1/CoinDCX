const mongoose= require("mongoose")

const KYC= new mongoose.Schema({
    PanCard:{
        type:String,
        required:true,
        unique:true
    },
    Adharcard:{
        type:String,
        required:true,
        unique:true
    },
    selfie:{
        type:String,
        required:true,
        unique:true
    }
    ,DOB:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model("kyc",KYC)