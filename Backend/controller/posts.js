import {db} from '../db.js'
import jwt from 'jsonwebtoken'
export const getposts=(req,res)=>{
	const q= req.query.cat? "SELECT*FROM posts WHERE cat=?" : "SELECT * FROM posts";
    db.query(q,[req.query.cat],(err,data)=>{
		if(err) return res.send(err)
		return res.status(200).json(data)
	}) 
}
export const getpost=(req,res)=>{
const q="SELECT p.id, `username`, `title`, `descr` , p.img,u.img AS userImg ,`cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?"
  db.query(q,[req.params.id],(err,data)=>{
	if(err) console.log(err)
	//return res.status(500).json(err);
	
	return res.status(200).json(data[0])
	
  })
}

export const addpost=(req,res)=>{
	res.json("this is from post controller ")
}
export const deletepost=(req,res)=>{
	const token =  req.cookies.newtoken 
	console.log(req)
	if(!token) return res.status(401).json("Not authenticated user")
	 jwt.verify(token,"jwtnewkey" , (err,userInfo)=>{
		if (err) return res.status(403).json("Token is not valid")
		const postId = req.params.id;
		const q="DELETE FROM posts WHERE `id`=? AND `uid`=?"
		db.query(q,[postId , userInfo.id], (err,data)=>{
		if(err) return res.status(403).json("you can delete only your post")
		return res.json("post has benn deleted!")
		})
	})
}
export const updatepost=(req,res)=>{
	res.json("this is from post controller ")
}
