import express from "express"
import contactForm from "../controllers/contact-controller.js"

const contactRoute = express.Router()

contactRoute.route("/contact").post(contactForm)


export default contactRoute