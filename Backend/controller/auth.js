import {db} from '../db.js'
export const register=(req,res)=>{
	const q="select *from users WHERE email=? OR username=?"
	db.query(q,[req.body.email,req.body.name],(err,data)=>{
		if(err) return res.json(err)
		if(data.length) return res.status(400).json("user already exist")
	});
} ;
export const login =(req,res)=>{
	
}
export const logout=(req,res)=>{
 
}