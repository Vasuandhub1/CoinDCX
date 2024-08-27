const stock=require("../models/stockModel")
const  {stockLow,stockHigh} = require("../utils/stockprice")
const timeSecries = require("../models/timeSecries")
const{getServer}=require("../config/configureWebSocket")
const WebSocket =require("ws")
const cron= require("node-cron")




const createStock=async(req,res)=>{
    try{
        let wss=getServer()
        console.log(wss)
        // get the data from the body
        const {symbol,high,low,open,close,price,volume}=req.body

        if(symbol&&high&&low&&open&&close&&price&&volume){
            const data=await stock.create({symbol,high,low,open,close,price,volume});
            if(data){
                wss.clients.forEach((client)=>{
                    if(client.readyState===WebSocket.OPEN){
                        client.send(JSON.stringify(data))
                    }
                }) 
            }
            return res.status(200).json({
                message:"created the new stock sucessful"
            })
        }else{
            return res.status(400).json({
                message:"please enter all the required fields"
            })
        }
    }catch(err){
        return res.status(404).json({
            message:err.message
        })
    }
}

const deleteStock=async(req,res)=>{
    try{
        const {symbol}=req.params
        if(symbol){
            await stock.findOneAndDelete({symbol:symbol})
            return res.status(200).json({
                message:"deleted the stock sucessful"
            })
        }else{
            return res.status(400).json({
                message:"plase the send the correct symbol name or enter the symbol name"
            })
        }
    }catch(err){
        return res.status(404).json({
            message:er.message
        })
    }
}

// const updateStock=async(req,res)=>{
//     try{
//         let wss=getServer()
//         console.log(wss)

//         const data=await stock.find()
//         setInterval(()=>{
//             let count=0
        
//            let intervalID= setInterval(()=>{
//                 data.forEach(async elem=>{
                    
//                     const price=elem.price
//                     const latest=price-1 + Math.random() * ((price+1)-(price-1))
//                     elem.priceArr.push(latest)
//                     elem.price=latest
//                     console.log("price updates")
//                     await elem.save()  
//                     wss.clients.forEach((client)=>{
//                         if(client.readyState===WebSocket.OPEN){
//                             client.send(JSON.stringify(elem))
//                         }
//                     })    
//             })
//             count+=1000
//                     if(count==1000*19){
//                         console.log("clear interval")
//                         clearInterval(intervalID)
//                     }
//             },1000*10)

//             setTimeout(()=>{
//                 data.forEach(async elem=>{
//                     elem.close=elem.priceArr[elem.priceArr.length-1]
//                     elem.open=elem.priceArr[0]
//                     elem.low=stockLow(elem.priceArr)
//                     elem.high=stockHigh(elem.priceArr)

//                     elem.priceArr=[]
//                     elem.priceArr.push(elem.price)
//                     await elem.save()
//                 })
//             },1000*195)
            
//             let date=Date.now()
//             console.log(date)
//             setTimeout(async ()=>{
//                 data.forEach(elem=>{
//                     elem.timestamp=date
//                 })
//                 const isdata=await timeSecries.insertMany(data)
//                 if(isdata){
//                     console.log("data updates")
//                     wss.clients.forEach((client)=>{
//                         if(client.readyState===WebSocket.OPEN){
//                             client.send(JSON.stringify(data))
//                         }
//                     })   

//                 }else{
//                     console.log(false)
//                 }
//             },300*1000)
//             console.log("api call for timesecries")
//         },1000*30*10)
//     }catch(err){
//         return res.status(404).json({
//             message:err.message
//         })
//     }
// }

const updateStockPrice=async(elem)=>{
    // const obj={...elem}
    // console.log(elem,"elem")
    // console.log(elem.price,"price")
    const latest= elem.price-1 + Math.random() * ((elem.price+1)-(elem.price-1))
    elem.price=latest
    elem.priceArr.push(latest)
    // console.log(elem,"obj")
    await stock.findByIdAndUpdate(elem._id,{...elem})
}

const updateStock=async()=>{
    const data= await stock.find({})

    data.map((elem)=>{
        updateStockPrice(elem)
    })
}

const updteTimeSecries=async()=>{
    let wss= getServer()
    const data=await stock.find({})

    data.forEach(async elem=>{
                            elem.close=elem.priceArr[elem.priceArr.length-1]
                            elem.open=elem.priceArr[0]
                            elem.low=stockLow(elem.priceArr)
                            elem.high=stockHigh(elem.priceArr)
                            elem.priceArr=[]
                            elem.priceArr.push(elem.close)
                            
                            await elem.save()
                          const val= await timeSecries.insertMany({close:elem.close,open:elem.open,low:elem.low,high:elem.high,timestamp:Date.now(),symbol:elem.symbol,volume:elem.volume})
                           wss.clients.forEach((client)=>{
                            if(client.readyState===WebSocket.OPEN){
                                client.send(JSON.stringify(val))
                                }
                        })
                        })
                      
                        console.log(data,"data")
                        
                 

}

cron.schedule("*/10 * * * * *",()=>{
    updateStock()
    console.log("updated")
})

cron.schedule(("*/1 * * * *"),()=>{
    updteTimeSecries()
})

module.exports={createStock,deleteStock,updateStock}

