import express from "express"
import { getpost,updateprofile,deleteAccount,addprofile} from "../controller/users.js"
const router = express.Router()
 router.get('/:id',getpost)
 router.delete('/:uid', deleteAccount)
 router.put('/:uid',updateprofile)
 router.post('/:uid',addprofile)
//upload profile image and edit
export default router