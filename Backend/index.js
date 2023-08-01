import express from "express"
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cookieParser from "cookie-parser"
const app=express()
import cors from 'cors'
const allowedOrigin = 'http://127.0.0.1:5173';
app.use(cors({
  origin: allowedOrigin,
  credentials: true 
}));
app.options('*', cors()); 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowedOrigin);
  next();
});
app.use(cookieParser())
app.use(express.json())
app.use("/backend/auth",authRoutes)
app.use("/backend/posts",postRoutes)
app.use("/backend/users",userRoutes)

app.listen(4000,()=>{
	console.log("connected")
})