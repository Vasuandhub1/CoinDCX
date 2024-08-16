const express= require("express")
const router= express.Router()

const {Register_user,Email_verification,login_user}= require("../controllers/UserController")

router.post("/register",Register_user)
router.post("/email_verification",Email_verification)
router.post("/login",login_user)
module.exports=router