const stockHigh=(arr)=>{
let high=Number.NEGATIVE_INFINITY
arr.forEach(element => {
    high=Math.max(element,high)
});
return high
}
const stockLow=(arr)=>{
let low=Number.POSITIVE_INFINITY
arr.forEach(elem=>{
    low=Math.min(elem,low)
})
return low
}

module.exports={stockHigh,stockLow}