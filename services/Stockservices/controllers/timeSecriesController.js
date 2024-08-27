const timeSecries =require("../models/timeSecries")

const getCrypto=async(req,res)=>{
    try{
        // now take the crypto name from the 
        const {crypto}=req.params
        console.log(crypto)

        // now find the stock from the timesecries data

        const data=await timeSecries.find({symbol:crypto})

        let arr=[]

        data.forEach(elem=>{
            let obj={x:new Date(elem.timestamp).getTime(),
                y:[elem.open,elem.high,elem.low,elem.close]
            }
            arr.push(obj)
        })

        console.log(data)

        return res.status(200).send(arr)

    }catch(err){
        return res.status(404).json({
            message:err.message
        })
    }
}

module.exports={getCrypto}