const jwt= require("jsonwebtoken")
const user= require("../models/user")
require("dotenv").config()

const generateToken=async (payload)=>{
    const token=await jwt.sign(payload,process.env.SECRET,{expiresIn:"2h"})

    return token
}

const decodeToken=async(token)=>{
    const data=jwt.verify(token,process.env.SECRET)
    const userDetails=await user.findById(data._id) 
    return userDetails
}

module.exports={generateToken,decodeToken}