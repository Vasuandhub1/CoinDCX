const mongoose= require("mongoose")
const bcrypt= require("bcrypt")

const UserSchema= new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        
    },
    password:
    {
       type:String,
       required :true
    },
    phone:{
        type:Number,
        
    },
    verify:{
        type:Number,
    },
    verify_Expiry:{
        type:Date
    },
    isVerified:
    {
        type:Boolean,
        required:true,
        default:false
    },
    KYC:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"kyc"
    },
    BankId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bankdetails"
    },
    wallet:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"wallet"
    },
    Stock_Wallent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"stock_wallet"
    }

},{timestamps:true})

UserSchema.pre("save",async function(next){
    if(this.isModified){
        await bcrypt.hash(this.password,10).then((data)=>{
            this.password=data
        }).catch((err)=>{
            console.log("Error in password Encryption")
        })
    }
    next()
})

UserSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)  
}


module.exports= mongoose.model("User",UserSchema)