import User from "../models/user.model.js"

 async function register (req,res,next){
  
   const {username,email,password,phoneNo} = req.body
   
   let usernameExist = await User.findOne({username})
   let ExistUser = await User.findOne({email})

   

   if(ExistUser){
      const status = 401 ;
      const message = "User already registered"
      const error = {
         status,
         message
      }
      next(error)
     // res.status(401).json({msg:"User already registered"})
   }

   else if(usernameExist){
      const status = 401;
      const message = "Username should be unique"
      let error ={
         status ,
         message
      }
     // res.status(401).json({msg:"username should be unique"})
      next(error)
      
   }

   try {

    let createdUser = await User.create({
         username,
         email,
         password,
         phoneNo
      })
      res.status(200).json(
         { msg:"registration successful",
           token:await createdUser.generateToken(),
           userId:createdUser._id.toString()
      })
      
   
   } catch (err) {
      let error ={
         status : 505,
         message : "Internal server error"
      }
      next(error)
     // res.status(501).json({msg:"Internal server error"})
   }
  
}


async function login (req,res){
 
   const {email,password} = req.body

   try {
    let existUSER = await User.findOne({email})
    
    if(existUSER){
      let isPasswordCorrect = await existUSER.isPasswordCorrect(password)

    if(isPasswordCorrect){
      res.status(201).json({
         msg:"login successfully",
         token:await existUSER.generateToken(),
         userId:existUSER._id.toString()
      })
    }
    else{
      res.status(401).json({msg:"Invalid credentials"})
      
    }
    }
    else{
      res.status(401).json({msg:"Invalid credentials"})
    }

    
   } catch (error) {
      console.error(error)
   }
}

const UserData = async(req,res,next)=>{
  
   try {
      const UserData = req.user
      
      res.status(201).json({UserData})
   } catch (error) {
      console.error(`error from user route ${error}`)
   }

}

export {register,login,UserData}