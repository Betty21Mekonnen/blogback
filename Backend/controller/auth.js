import {db} from '../db.js'
import bcrypt from 'bcryptjs'
import jwt from'jsonwebtoken'
import nodemailer from 'nodemailer'
import base64url from 'base64url'
//import User from '../index.js';

export const register=(req,res)=>{
	const q="select *from users WHERE email=? OR username=?"
	db.query(q,[req.body.email,req.body.name],(err,data)=>{
		if(err) return res.json(err)
		if(data.length) return res.status(400).json("user already exist")
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password,salt)
		const q="INSERT INTO  users(username,email,password)Values(?)"
		const values = [req.body.username, req.body.email, hash]
		db.query(q,[values],(err,data)=>{
           if(err) return res.json(err);
		   return res.status(200).json("user has been created");
		})
	});
} ;
// export const isAuthenticated = async(req, res, next) => {
//    const token =  req.cookies.token
//    console.log(req.headers)
//    if(!token) return res.status(401).json("Not authenticated user")
//   jwt.verify(token,"secret key" , (err,userInfo)=>{
// 	if (err) return res.status(403).json("Token is not valid")
//   })
// }
export const forgot = async (req, res) => {
	const q = "SELECT * FROM users WHERE email=?";
	const email=req.body.email
	db.query(q, [email], (err, data) => {
	  if (err) return res.json(err);
	  if (data.length === 0) return res.status(400).json("user not found!");
	 
	  let token = jwt.sign({ id: data[0].id }, "jwtnewkey", { expiresIn: "1h" });
	  token = base64url(token);
	  var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
		  user: 'bmekonnenad@gmail.com',
		  pass: 'wpuidlxrqvextory'
		}
	  });
  
	  var mailOptions = {
		from: 'bettymekonnen21@gmail.com',
		to: email,
		subject: 'Reset Password Link',
		text: `http://127.0.0.1:5173/reset_password/${data[0].id}/${token}`
	  };
  
	  console.log(token);
  
	  transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
		  console.log(error);
		} else {
		  return res.send({ Status: "Success" });
		}
	  });
	});
  };
export const reset = async(req,res)=>{ 
	const {id} = req.params
const {password} = req.body
const token = base64url.decode(req.params.token);

jwt.verify(token, "jwtnewkey", (err, decoded) => {
	if(err) {
		return res.json({Status: "Error with token"})
	}
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password,salt)
	const q =  "UPDATE users SET `password`=? WHERE `id` = ? ";
    db.query(q, [hash, id], (err, data) => {
		if (err) return res.status(500).json(err);
		return res.json("password reset.");
	  });
})}

export const login = (req, res) => {
	const q = "SELECT * FROM users WHERE email=?";
	db.query(q, [req.body.email], (err, data) => {
	  if (err) return res.json(err);
	  if (data.length === 0){
		return res.status(400).json({ message: "User not found!" });
	  }
	  const isPasswordCorrect = bcrypt.compareSync(
		req.body.password,
		data[0].password
	  );
	  if (!isPasswordCorrect)
		return res.status(400).json({ message: "Wrong email or password" });
	  const token = jwt.sign({ id: data[0].id }, "jwtnewkey", {
		expiresIn: "24h",
	  });
	  const { password, ...other } = data[0];
  
	  if (isPasswordCorrect) {
		res
		  .cookie("token", token, {
			httpOnly: true,
			sameSite: "none",
			secure: true,
			path: "/",
			domain: 'blogging-production-7db1.up.railway.app'
		  })
		  .status(200)
		  .json({ ...other });
	  }
	  
   //sendTokenResponse(data[0], 200, res);
	});

 }
 export const logout = (req, res) => {
	res.clearCookie("token", {
	  httpOnly: true,
	  sameSite: "none",
	  secure: true,
	  path: "/",
	  domain: 'blogging-production-7db1.up.railway.app'
	}).status(200).json("User has been logged out.");
  };
  //new ketach
//   const sendTokenResponse = async (user, codeStatus, res)=>{
//     const token = User.getJwtToken();
// 	//console.log(token)
//     res
//         .status(codeStatus)
//         .cookie(
// 			res.cookie('token', token, {
// 				maxAge: 60 * 60 * 1000,
// 				httpOnly: true, 
// 				sameSite: 'none',
// 				secure: true, 
// 			}))
//             .json({
//                 success: true,
//                 user,
// 				id:user.id
//             })
			
// }