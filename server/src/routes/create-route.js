import express from "express"
import createData from "../controllers/create-controllers.js"
import DataMiddleware from "../../middlewares/data-middleware.js"
import createdData from "../controllers/SendDta-controllers.js"



const createRoute = express.Router()

createRoute.route("/data").post(DataMiddleware,createData)
createRoute.route("userData").get(DataMiddleware,createdData)


export default createRoute