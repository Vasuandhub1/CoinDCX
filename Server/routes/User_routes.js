const express= require("express")
const router= express.Router()

const {Register_user,Email_verification,login_user,Reset_password,ResetPasswordOTP}= require("../controllers/UserController")
const{know_your_customer} = require("../controllers/KYC")
router.post("/register",Register_user)
router.post("/email_verification",Email_verification)
router.post("/login",login_user)
router.post("/Reset_password",Reset_password)
router.post("/Reset_Password_OTP",ResetPasswordOTP)
router.post("/KYC",know_your_customer)

module.exports=router