import express from "express"
import { getpost} from "../controller/users.js"
const router = express.Router()
 router.get('/:id',getpost)
// router.delete('/:uid', deleteprofile)
// router.put('/:uid',updateprofile)
// router.post('/:uid',addprofile)
//upload profile emage and edit
export default router