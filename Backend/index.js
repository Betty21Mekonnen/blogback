import express from "express"
import postRoutes from './routes/posts.js'
const app=express()
app.use(express.json())

app.get("/test",(req,res)=>{
   res.json("it works!")
})
app.listen(8080,()=>{
	console.log("connected")
})