import dotenv from "dotenv"
import express from "express"
import connectDB from "./src/db/connectDB.js"
import authRouter from "./src/routes/auth-router.js"
import errorMiddleware from "./middlewares/error-middleware.js"
import contactRoute from "./src/routes/contact-route.js"
import createRoute from "./src/routes/create-route.js"
import cors from "cors"
import sendDataRoute from "./src/routes/sendData-route.js"

const app = express()
app.use(cors({
    origin:"http://localhost:5173",
    methods:"HEAD, POST, GET, PUT, PATCH",
    credentials:true,
}))
app.use(express.json())
app.use("/api/auth",authRouter)
app.use("/api/form",contactRoute)
app.use("/api/create",createRoute)
app.use("/api/send",sendDataRoute)
app.use(errorMiddleware)

dotenv.config({
    path:"./.env"
})


connectDB().then( ()=>{
    app.listen(process.env.PORT,function(){
        console.log(`server is running on ${process.env.PORT}`);
        
    })
}

    
)