import {db} from '../db.js'
import bcrypt from 'bcrypt'
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
export const login =(req,res)=>{
	
}
export const logout=(req,res)=>{
 
}