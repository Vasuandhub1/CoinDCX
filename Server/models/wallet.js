const mongoose= require("mongoose")

const wallet= new mongoose.Schema({
    spot_wallet:{
        type:Number
    },
    INR_wallet:{
        type:Number
    },
    forex_wallet:[
        {symbol:String ,
         amount:Number
        }
    ],
    crypto_Wallet:{
        type:Number
    }
})

module.exports= mongoose.model("wallet",wallet)