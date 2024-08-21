const cloudinary=require("cloudinary").v2
require("dotenv").config()

const connect_Cloudinary=async()=>{
    const cloud_connect=await cloudinary.config({
        cloud_name:'dzj42ebpy', 
        api_key: '814935324446285',
        api_secret:process.env.api_secret
    })
    if(cloud_connect){
    
        console.log("Connected to the cloudinary sucessfully")
        console.log(cloud_connect.cloud_name)
    }else{
        console.log("error in the cloud connection")
    }
}

module.exports=connect_Cloudinary