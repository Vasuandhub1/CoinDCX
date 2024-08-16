const mongoose= require("mongoose")

const KYC= new mongoose.Schema({
    PanCard:{
        type:String,
        required,
        unique
    },
    Adharcard:{
        type:String,
        required,
        unique
    },
    selfie:{
        type:String,
        required,
        unique
    }
})

module.exports= mongoose.model("kyc",KYC)