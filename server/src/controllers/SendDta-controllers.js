import User from "../models/user.model.js"


const createdData =async(req,res,next)=>{
    let data = req.user
    let user = await User.findOne({email:data.email}).populate("Data")
    res.status(201).json({user})

}

export default createdData