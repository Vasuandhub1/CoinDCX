const express=require("express")
const app=express()
require("dotenv").config()
const connect=require("./config/connectDB")
const router=require("./routes/route")
const {createWebSocket,getServer}=require("./config/configureWebSocket")
const cors=require("cors")

connect()

app.use(cors({
    origin:true,
    credentials:true
}))



const server=app.listen(process.env.PORT,()=>{
    console.log("the server is running on the port ", process.env.PORT)
})

createWebSocket(server)



app.use(express.json())
app.use("/api",router)

app.get("/",(req,res)=>{
    res.send("hello")
})

