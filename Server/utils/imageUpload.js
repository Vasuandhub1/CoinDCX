const { handleErr}=require("../utils/handleRes")
const cloudinary=require("cloudinary").v2

const upload=async(file,folder)=>{
    const option={folder}
    return await cloudinary.uploader.upload(file.tempFilePath,option)
}

const upload_Image_KYC=async (file,res,next)=>{

    // check the file type
    const allowed=["png","jpg","png","svg","jpeg"]

    // check what is input file extention
    const fileType=file.name.split(".")[1].toLowerCase()

    // now match for the availble file type
    if(allowed.includes(fileType)){
        // now upload the file to the cloudinary
        const folder="KYC"
        const kyc_url=await upload(file,folder)
        return kyc_url
    }else{
        return next(handleErr(400,"please check the file type Or remove extra '.' from the file name",res))
    }
}

module.exports=upload_Image_KYC