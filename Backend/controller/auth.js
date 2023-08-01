import {db} from '../db.js'
import bcrypt from 'bcrypt'
import jwt from'jsonwebtoken'
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
export const login = async(req,res)=>{
	console.log('login ...')
	const q="SELECT *FROM users WHERE email=?";
 	const result =	db.query(q,[req.body.email],(err,data)=>{
		
		if(err) return res.json(err)
		if(data.length === 0) return res.status(400).json("user not found!")
		const ispasswordcorrect = bcrypt.compareSync(req.body.password,data[0].password);
		console.log(ispasswordcorrect)
		if(!ispasswordcorrect) return res.status(400).json("Wrong email or password")
		const token = jwt.sign({ id: data[0].id }, "jwtnewkey");
        const { password, ...other } = data[0];
		
	   if(ispasswordcorrect){
		res.cookie('newtoken', token, {
		httpOnly: true, 
		sameSite: 'none',
		secure: true, 
		
	  }).status(200)
	  .json(other);
	}
	});
}
export const logout=(req,res)=>{
 
}