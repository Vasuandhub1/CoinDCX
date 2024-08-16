const nodemailer=require("nodemailer")


const handleNode_mailer=async(One_Time_Password,email)=>{
    console.log("hello")
    const transporter= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"vasusingh9691@gmail.com",
            pass:"xhup mklz mglc swul"
        }
    });


    const mailOptions={
        from:"vasusingh9691@gmail.com",
        to:`${email}`,
        subject:"One time password",
        html:`<div style="width: 100%; display: flex; justify-content: center;"><div style="border: 2px solid white; width:max-content; padding: 5%; font-family: monospace; background-color: black; color: aliceblue; display: flex; justify-content: center;"><div><div style="display: flex;"><h1>Coin</h1><h1 style="color:orange">DCX</h1></div><h2>One Time Password</h2><p>Please Dont share this OTP</p><input type="text" style="height: 30px; width: 150px;" value=${One_Time_Password} disabled><p>This OTP is valid for 2 hours</p></div></div></div>`
          
    }

    await transporter.sendMail(mailOptions,function(err,info){
        if(err){
            return(err)
        }else{
            return(true)
           
        }
    })
}

module.exports= handleNode_mailer