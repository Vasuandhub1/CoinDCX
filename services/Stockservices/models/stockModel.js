const mongoose=require("mongoose")

const stock=new mongoose.Schema({
    symbol:{
        type:String,
        required:true,
        uniqe:true
    },
    volume:{
        type:Number,
        required:true
    },
    low:{
        type:Number,
        required:true
    },
    high:{
        type:Number,
        required:true
    },
    open:{
        type:Number,
        required:true
    },
    close:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    listingPrice:{
        type:Number,
        required:true
    },
    priceArr:{
        type:[Number]
    }
},{timestamps:true})

module.exports= mongoose.model("stock",stock)