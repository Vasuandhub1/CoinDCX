const mongoose= require("mongoose")

const strokWallet=  new mongoose.Schema({
    stock_name:{
        type:String,
        required,
        unique
    },
    stock_quantity:{
        type:Number,
        required
    },
    Invested_amount:{
        type:Number,
        required
    },
    current_stock_value:{
        type:Number,
        required:true
    }
})

module.exports= mongoose.model("stockWallet",strokWallet)