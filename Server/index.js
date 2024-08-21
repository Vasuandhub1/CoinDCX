const express= require("express")
const app= express()
const route =require("./routes/User_routes")
const fileUpload=require("express-fileupload")
require("dotenv").config()
const cloud_connect=require("./config/cloudinary_config")
const cors = require("cors")
const connectDB = require("../Server/config/data_base_Connection")
const cookieParser = require("cookie-parser")

connectDB()

cloud_connect()



app.use(express.json())

app.use(cookieParser())

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/',
    limits: { fileSize: 50 * 1024 * 1024 },
}))
app.use(cors({
    origin:true,
    credentials:true
}))

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/coinDCX/",route)

app.listen(process.env.PORT,()=>{
    console.log(`litening to server on port no ${process.env.PORT}`)
})