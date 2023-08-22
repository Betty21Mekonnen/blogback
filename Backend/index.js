import express from "express"
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cookieParser from "cookie-parser"
import multer from "multer"
import dotenv from 'dotenv';
import path from "path"
dotenv.config();
const app=express()
app.use(cookieParser())
app.use(express.json())
import cors from 'cors';

const allowedOrigin = 'https://blogging-steel.vercel.app';
const corsOptions = {
  origin: allowedOrigin,
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '../frontend/public/upload')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now()+file.originalname)
//   }
// })
// const upload = multer({storage })
// app.post('/backend/upload', upload.single('file'), function (req, res) {
//   const file=req.file
//    res.status(200).json(file?.filename)
// })

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'upload')); // Use an absolute path
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});


app.use("/backend/auth",authRoutes)
app.use("/backend/posts",postRoutes)
app.use("/backend/users",userRoutes)
app.use('/upload', express.static('upload'));
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
