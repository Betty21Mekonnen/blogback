import express from "express"
import { register,login ,logout } from "../controller/auth.js"

const router = express.Router()
router.post("/reg",register)
router.post("/log",login)
router.post("/logout",logout)
router.post('/forgot-password',forgot)
router.post('/reset-password/:id/:token', reset)
export default router