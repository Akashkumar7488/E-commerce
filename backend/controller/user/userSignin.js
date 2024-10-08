// signin for user login
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const userModel = require("../../models/userModel");
async function userSignInController(req,res){
     try{
         const{email,password} = req.body

         if(!email){
            throw new Error("please provide email")
          }
          if(!password){
            throw new Error("please provide password")
          }

          const user = await userModel.findOne({email})

          if(!user){
            throw new Error("USer not found")
          }

        //   bcrypt to match password or check
        const checkPassword = await bcrypt.compare(password,user.password)

        console.log("checkPassword",checkPassword);

        if(checkPassword){
          const tokenData ={
          _id : user._id,
          email : user.email,
          }
          const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY,{ expiresIn: '8h' });

          const tokenOption ={
            httpOnly:true,
            secure:true
          }

          res.cookie("token",token,tokenOption).json({
            message:"Login successfully",
            data:token,
            success:true,
            error:false
          })

     
        }else{
      throw new Error("Please check Password")
     }
 }
catch(err){
  res.json({
    message:err.message || err,
    error:true,
    success:false,
})
}
}
module.exports = userSignInController;