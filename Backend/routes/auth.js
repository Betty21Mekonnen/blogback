import express from "express"
import { register,login ,logout } from "../controller/auth.js"

const router = express.Router()
router.post("/reg",register)
router.post("/log",login)
router.post("/logo",logout)
export default router