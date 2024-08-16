const mongoose = require("mongoose")

const Bankdetails= new mongoose.Schema({
    bankname:{
        type:String,
        required,
    },
    IFSC:{
        type:String,
        required
    },
    AccountNo:{
        type:String,
        required,
        unique
    }
})

module.exports= mongoose.model("BankDetails",Bankdetails)