  import jwt from "jsonwebtoken"
  import User from "../src/models/user.model.js"

  const tokenMiddleware = async (req,res,next)=>{
    const token = req.header("Authorization")

    if(!token){
        res.status(401).json({msg:"Unauthorized http ,token not provided"})
    }

    const jwtToken = await token.replace("Bearer","").trim()
   
    
    

     try {
         
        const IsVerified  =   jwt.verify(jwtToken,process.env.TOKEN_SECRET)
       
        
        const UserData = await User.findOne({email:IsVerified.email}).select({password:0})

       

        req.user=UserData;
        req.token=token;
        req.userId=UserData._id

        next()
     } catch (error) {
        console.log(error);
        
        return res.status(401).json({msg:"Invalid token"})
     }
  }

  export default tokenMiddleware