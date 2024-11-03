import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

let userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    Data:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"UserData"
        }
    ]
}
,{timestamps:true})

userSchema.pre("save", async function(next){

  if(!this.isModified("password")){
   return next()
  }

 try {
    let salt =  bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(this.password, salt);
    this.password = hash
 } catch (error) {
    next(error)
 }
})

userSchema.methods.generateToken = function(){

return jwt.sign({
        email:this.email,
        userId:this._id.toString(),
        isAdmin:this.isAdmin
    },

    process.env.TOKEN_SECRET,

    {expiresIn:process.env.TOKEN_EXPIRY})
}

userSchema.methods.isPasswordCorrect = function(password){
    return  bcrypt.compare(password,this.password)
 
}

const User  = mongoose.model("User",userSchema)

export default User
