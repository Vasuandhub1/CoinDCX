const express= require("express")
const router=express.Router()

const {createStock,deleteStock,updateStock}=require("../controllers/stockController")
const {getCrypto}=require("../controllers/timeSecriesController")

router.post("/createStrock",createStock)
router.delete("/deleteStock/:symbol",deleteStock)
router.get("/update",updateStock)
router.get("/getCrypto/:crypto",getCrypto)

module.exports=router