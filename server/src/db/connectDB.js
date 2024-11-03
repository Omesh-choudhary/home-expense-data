import mongoose from "mongoose"


async function connectDB (){

    try {
        
        let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/home_Expense`)
       console.log("connection successful to db",connectionInstance.connection.host);
       
    } catch (error) {
        console.error("mongoDB connection error !!",error);
        throw error
        
    }
}


export default connectDB