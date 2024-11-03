import express from "express"
import DataMiddleware from "../../middlewares/data-middleware.js"
import createdData from "../controllers/SendDta-controllers.js"




const sendDataRoute = express.Router()


sendDataRoute.route("/userData").get(DataMiddleware,createdData)


export default sendDataRoute