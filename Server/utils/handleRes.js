const handleRes= (data,statu,message,res)=>{
    const stat=statu||200
    const val=data||"Request sucessful"
    
    return res.status(stat).json({
        data:val,
        message:message,
    })
}

const handleErr= (status,message,res)=>{
    const stat=status||404
   
    const mes=message||"Server Err"
    
    return res.status(stat).json({
        message:mes,
    })
}

const handleUnknownErr= (messag,res)=>{
    const stat=500
    const mes=messag||"Internal Server Err"
    
    return res.status(stat).json({
        message:mes,
    })
}

module.exports={handleErr, handleRes , handleUnknownErr}