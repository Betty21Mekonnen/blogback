import {db} from '../db.js'
import jwt from 'jsonwebtoken';
export const getposts=(req,res)=>{
	const q= req.query.cat? "SELECT*FROM posts WHERE cat=?" : "SELECT * FROM posts";
    db.query(q,[req.query.cat],(err,data)=>{
		if(err) return res.send(err)
     	return res.status(200).json(data)

		
	}) 
}
export const getpost=(req,res)=>{
const q="SELECT p.id,u.id AS userId , `username`, `title`, `descr` , p.img,u.img AS userImg ,`cat`, `date` FROM posts p LEFT JOIN users u ON u.id = p.uid WHERE p.id = ?";
  db.query(q,[req.params.id],(err,data)=>{
	if(err) console.log(err)
	//return res.status(500).json(err);
	//console.log(data)
	return res.status(200).json(data[0])
	
  })
}
// export const getpost=(req,res)=>{
// const q = "SELECT p.id, u.id AS userId, `username`, `title`, `descr`, p.img, u.img AS userImg, `cat`, `date` FROM posts p LEFT JOIN users u ON u.id = p.uid WHERE p.id = ?";

// db.query(q, [req.params.id], (err, data) => {
//   if (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
  
//   console.log(data);
//   return res.status(200).json(data[0]);
// });
// }
export const addpost=(req,res)=>{
	 const token =  req.cookies.token
	 console.log(token)
	 if(!token) return res.status(401).json("Not authenticated user")
	  jwt.verify(token,"jwtnewkey" , (err,userInfo)=>{
		if (err) return res.status(403).json("Token is not valid")
	const q = "INSERT INTO posts (title, descr, img, cat, date, uid) VALUES (?)";
const values =[
     req.body.title,
	 req.body.descr,
	 req.body.img,
	 req.body.cat,
	 req.body.date,
	 userInfo.id
]
db.query(q,[values],(err,data)=>{
	if(err) return res.status(500).json(err)
	return res.json({message:"post has been created"})
})
	 })
}
export const deletepost = (req, res) => {
	const token = req.cookies.token;
	if (!token) return res.status(401).json("Not authenticated user");
	
	jwt.verify(token, "jwtnewkey", (err, userInfo) => {
	  if (err) return res.status(403).json("Token is not valid");
  
	  const postId = req.params.id;
	  const q = "DELETE FROM posts WHERE `id`=? AND `uid`=?";
	  db.query(q, [postId, userInfo.id], (err, data) => {
		//console.log(userInfo)
		if (err) {
		  return res.status(500).json("Error deleting the post");
		} else if (data.affectedRows === 0) {
		  return res.status(403).json("You can only delete your own post");
		} else {
		  return res.json({message:"Post has been deleted!"});
		}
	  });
	});
  };
export const updatepost=(req,res)=>{
	const token = req.cookies.token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtnewkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q =  "UPDATE posts SET `title`=?,`descr`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.descr, req.body.img, req.body.cat];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json({message:"Post has been updated."});
    });
  });
}
export const addComment=(req,res)=>{
	const token =  req.cookies.token
	const {comment,date}=req.body;
	console.log(token)
	if(!token) return res.status(401).json("Not authenticated user")
	 jwt.verify(token,"jwtnewkey" , (err,userInfo)=>{
	   if (err) return res.status(403).json("Token is not valid")
	   const postId = req.params.id;
	   const q = "INSERT INTO comments (postid, uid, comment,date) VALUES (?)";//lebcha comment table mefter alebgn becaus ke and belay comment for one post endet handle yaregal
const values =[postId ,userInfo.id,comment,date ]
db.query(q,[values],(err,data)=>{
   if(err) return res.status(500).json(err)
   return res.json({message:"you add a comment here"})
})
	})
}
export const getcomments=(req,res)=>{
	const q="SELECT c.postid, `username`,u.`img` AS userImg, `comment` FROM users u LEFT JOIN  comments c ON u.id=c.uid WHERE c.postid=?"
	  db.query(q,[req.params.id],(err,data)=>{
		if(err){ console.log(err)
	       return res.status(500).json(err);
		}
		  // console.log(data)
		return res.status(200).json(data)
	
	  })
	}
	
