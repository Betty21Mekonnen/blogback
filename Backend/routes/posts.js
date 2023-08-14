import express from "express"
import {addpost,deletepost, getpost, getposts,updatepost,addComment,getcomments} from "../controller/posts.js"
//import { isAuthenticated } from "../controller/auth.js"
 const router = express.Router()
  router.get('/',getposts)
  router.get('/:id',getpost)
  router.post('/' ,addpost)
  router.delete('/:id', deletepost)
  router.put('/:id',updatepost)
  router.post('/comment/:id',addComment)
  router.get('/comment/:id',getcomments)
export default router