import { db } from "../db.js"
export const getpost=(req,res)=>{
    //const q="SELECT*FROM posts  WHERE uid=?"
	//const q="SELECT p.id,u.id AS userId , `username`, `title`, `descr` , p.img,u.img AS userImg ,`cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.uid=?"
	const q="SELECT p.id, u.id AS userId, u.`username`, p.`title`, p.`descr`, p.`img`, u.`img` AS userImg, p.`date`, IFNULL(c.commentCount, 0) AS commentCount FROM users u JOIN posts p ON u.id = p.uid LEFT JOIN (SELECT postid, COUNT(*) AS commentCount FROM comments GROUP BY postid) c ON p.id = c.postid WHERE p.uid = ?"
	db.query(q,[req.params.id],(err,data)=>{
		//console.log([req.params.id]) 
        if(err) {
            console.log(err)
           return res.status(500).json(err);
        }
        //console.log(data.length)
        return res.status(200).json(data)
    })
	//const q= "SELECT  p.* , u.username AS uname,u.img AS userImg, COUNT(c.comment) AS comment FROM posts p JOIN users u ON u.id = p.uid LEFT JOIN comments c ON c.postid = p.id WHERE p.uid = ?";
 

}