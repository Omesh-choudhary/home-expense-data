import {UserData} from "../models/UserData.model.js"
import User from "../models/user.model.js"


const createData = async(req,res,next)=>{
 
    try {
        const {Date,Product,Expense,Income,Balance}=req.body
        let user = await User.findOne({email:req.user.email})

       let HomeData = await UserData.create({
            Date,Product,Expense,Income,Balance,UserId:user._id
        })

        user.Data.push(HomeData._id)
        await user.save()
        
        res.status(201).json({HomeData
        })
    } catch (error) {
        console.log(error);
        
        next({status:501, message:"Internal server error"})
    }
}


export default createData