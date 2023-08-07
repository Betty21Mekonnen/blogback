import {useState ,React,useEffect, useContext} from 'react'
import { useLocation,Link, useNavigate } from 'react-router-dom'
import content from '../assets/debredamo.jpg'
import { Eraser , Trash } from 'phosphor-react'
import Menu from '../component/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext'
export default function Single() {
  const [post,setPost]=useState({})
  const location=useLocation();
  const navigation = useNavigate()
  const postId = location.pathname.split("/")[2]
  const {currentUser} = useContext(AuthContext)
    useEffect(()=>{
      const fetchData=async()=>{
        try{
          const res = await axios.get(`http://localhost:4000/backend/posts/${postId}`)
          setPost(res.data)
         
        }
        catch(err){
          console.log(err)
        }
      }
      fetchData()
    },[postId])
    const handleDelete = async()=>{
      try{
        await axios.delete(`http://localhost:4000/backend/posts/${postId}`,
        {
          method: 'DELETE',
          credentials: 'include' 
        })
        navigate("/")
      }
      catch(err) {console.log(err)}
    }
      return (
	<div className='flex gap-12 px-8 py-4'>
    <div className='w-7/10'>
        <img className='w-screen' src={post?.img} alt="" />
        <div className='flex items-center'>
        <img src={post.userImg} alt="" className="w-12 h-12 border rounded-full" />
        <div> 
          <p>{post.username}</p>
          <p className='text-xs'>{moment(post.date).fromNow()}</p></div>
          {currentUser.username===post.username &&(
            <div>
          <Link to="/Write"><Eraser size={32} color="#2a00fa" weight="fill" className='cursor-pointer' /></Link>
          <Trash size={32} color="#fa0000" className='cursor-pointer' onClick={handleDelete}/>
         </div>
          )}
          </div>
        <div className='flex flex-col gap-4 m-4'>
          <h1 className='text-4xl capitalize'>{post.title}</h1>
          <p className=' text-justify leading-6 font-mono capitalize'>
          Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of 
          alphabetic and numericcharacters, between two or more users of mobile devices, desktops/laptops, or another
           type of compatible computer.<br/><br/>  Text messages may be sent over a cellular network or may also be sent via satellite
            or Internet connection. The term originally referred to messages sent using the Short Message Service (SMS).
          It has grown beyond alphanumeric text to include multimedia messages using <br/><br/>
          the Multimedia Messaging Service (MMS) containing digital images, videos,
          and sound content, as well as ideograms known as emoji (happy faces, sad faces, and other icons), and instant messenger 
          applications (usually the term is used when on mobile devices).
          </p>
          </div>
    </div>
     <Menu/>
  </div>
  )
}
