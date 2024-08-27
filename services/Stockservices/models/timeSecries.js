const mongoose=require("mongoose")

const timeSecries=new mongoose.Schema({
    timestamp:{ type:Date},
    open: { type: Number, required: true },
    close: { type: Number, required: true },
    high: { type: Number, required: true },
    low: { type: Number, required: true },
    volume: { type: Number, required: true },
    symbol: { type: String, required: true },
},{timeseries:{timeField:"timestamp",
    metaField:"symbol",
    granularity:"minutes"
}})

module.exports=mongoose.model("timesecrires",timeSecries)