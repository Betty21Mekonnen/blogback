import express from "express"
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cookieParser from "cookie-parser"
import multer from "multer"
import dotenv from 'dotenv';
dotenv.config();
const app=express()
app.use(cookieParser())
app.use(express.json())
import cors from 'cors'
app.use(cors());
// 'http://127.0.0.1:5173'
// const allowedOrigin ='https://blogging-steel.vercel.app'
// app.use(cors({
//   origin: allowedOrigin,
//   credentials: true 
// }));
// app.options('*', cors()); 
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', allowedOrigin);
//   next();
// });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://blogging-4t6jrmp5i-betelhemmekonnen.vercel.app');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../frontend/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})


const upload = multer({storage })
app.post('/backend/upload', upload.single('file'), function (req, res) {
  const file=req.file
   res.status(200).json(file?.filename)
})
app.use("/backend/auth",authRoutes)
app.use("/backend/posts",postRoutes)
app.use("/backend/users",userRoutes)
// const User = {
//   getJwtToken: function () {
//     const payload = { id: this.id };
//     // Generate the JWT
//     const token = jwt.sign(payload, "secret key", { expiresIn: 3600 });

//     return token;
//   },
// };

//export default User;
const port=process.env.PORT||4000
app.listen(port,()=>{
	console.log("server connected")
})
