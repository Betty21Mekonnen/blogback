import { db } from "../db.js"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
export const getpost=(req,res)=>{
    //const q="SELECT*FROM posts  WHERE uid=?"
	//const q="SELECT p.id,u.id AS userId , `username`, `title`, `descr` , p.img,u.img AS userImg ,`cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.uid=?"
	const q="SELECT p.id, u.`id` AS userId ,u.`email`, u.`username`, p.`title`, p.`descr`, p.`img`, u.`img` AS userImg, p.`date`, IFNULL(c.commentCount, 0) AS commentCount FROM users u JOIN posts p ON u.id = p.uid LEFT JOIN (SELECT postid, COUNT(*) AS commentCount FROM comments GROUP BY postid) c ON p.id = c.postid WHERE p.uid = ?"
	db.query(q,[req.params.id],(err,data)=>{
		//console.log([req.params.id]) 
        if(err) {
            console.log(err)
           return res.status(500).json(err);
        }
        //console.log(data)
        return res.status(200).json(data)
    })
	//const q= "SELECT  p.* , u.username AS uname,u.img AS userImg, COUNT(c.comment) AS comment FROM posts p JOIN users u ON u.id = p.uid LEFT JOIN comments c ON c.postid = p.id WHERE p.uid = ?";
}
export const updateprofile=(req,res)=>{
	const token = req.cookies.token;
  if (!token) return res.status(401).json("Not authenticated!");
  jwt.verify(token, "jwtnewkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const uid = req.params.id;
	// const q =  "UPDATE posts SET `title`=?,`descr`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";
    const q =  "UPDATE users SET `email`=?,`username`=?,`password`=? WHERE `id` = ? ";
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(req.body.password,salt)
    const values = [req.body.email, req.body.username,hash];
    db.query(q, [...values, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("info has been updated.");
    });
  });
}
export const deleteAccount = (req, res) => {
	const token = req.cookies.token;
	if (!token) return res.status(401).json("Not authenticated user");	
	jwt.verify(token, "jwtnewkey", (err, userInfo) => {
	  if (err) return res.status(403).json("Token is not valid");
	  const uid = req.params.id;
	  const q = "DELETE FROM users WHERE `id`=?";
	  db.query(q, [userInfo.id], (err, data) => {
		//console.log(userInfo)
		if (err) {
		  return res.status(500).json("Error deleting account");
		} else if (data.affectedRows === 0) {
		  return res.status(403).json("You can only delete your own post");
		} else {
		  return res.json("Post has been deleted!");
		}
	  });
	});
  };
  export const addprofile=(req,res)=>{
	const token =  req.cookies.token
	//console.log(token)
	if(!token) return res.status(401).json("Not authenticated user")
	 jwt.verify(token,"jwtnewkey" , (err,userInfo)=>{
	   if (err) return res.status(403).json("Token is not valid")
	   const q =  "UPDATE users SET `img`=? WHERE `id` = ? ";
db.query(q,[req.body.img,userInfo.id],(err,data)=>{
	// console.log(req.body.img)
	// console.log(userInfo.id)
   if(err) return res.status(500).json(err)
   return res.json("post has been created")
})
	})
}