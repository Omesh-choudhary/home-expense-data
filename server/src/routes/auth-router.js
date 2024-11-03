import express from "express"
import { register ,login, UserData } from "../controllers/auth-controller.js"
import validate from "../../middlewares/auth-middleware.js"
import signUpSchema from "../../validators/auth-validator.js"
import tokenMiddleware from "../../middlewares/token-middleware.js"
const authRouter = express.Router()

authRouter.route("/register").post( validate(signUpSchema)  ,register)
authRouter.route("/login").post(login)
authRouter.route("/user").get(tokenMiddleware,UserData)







export default authRouter