const generate_otp=()=>{
    let otp= Math.ceil(Math.random()*1000000)

    if(otp.length<6){
        let len=1000000/otp.length
        otp=otp*len;
    }
    return otp;
}

module.exports= generate_otp
