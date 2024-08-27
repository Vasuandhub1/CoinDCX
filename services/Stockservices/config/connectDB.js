const mongoose=require("mongoose")
require("dotenv").config()

const connectDB=async()=>{
    const connect=await mongoose.connect(process.env.DATA_BASE,{family:4}).then((data)=>{
        console.log("connected to data base sucessful")
    }).catch((err)=>{
        console.log("err in connection")
    })
}

module.exports=connectDB