const mongoose= require("mongoose")
require("dotenv").config()

const connectDB=async()=>{
    await mongoose.connect(process.env.DATA_BASE,{family:4}).then((val)=>{
        console.log("connected to data base sucessful")
    }).catch((err)=>console.log(`err in data base creatring ${err}`))
}

module.exports=connectDB