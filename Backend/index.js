import express from "express"
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
const app=express()
import cors from 'cors'
app.use(cors())
app.use(express.json())
app.use("/backend/auth",authRoutes)
app.use("/backend/posts",postRoutes)
app.use("/backend/users",userRoutes)

app.listen(5000,()=>{
	console.log("connected")
})