const express= require("express")
const app= express()
const route =require("./routes/User_routes")
require("dotenv").config()

const connectDB = require("../Server/config/data_base_Connection")
const cookieParser = require("cookie-parser")

connectDB()

app.use(express.json())

app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/coinDCX/",route)

app.listen(process.env.PORT,()=>{
    console.log(`litening to server on port no ${process.env.PORT}`)
})