import User from "../src/models/user.model.js"

const Balance = async(userId)=>{

let Data = await User.findOne({_id:userId})
return Data

}

export default Balance