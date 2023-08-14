import React, { useState ,useEffect} from 'react';
import { Eraser, Trash ,ChatText } from 'phosphor-react';
import Logo from '../assets/image2.png';
import { AuthContext } from '../context/authContext';
import { useContext} from 'react';
import {  Link,useLocation } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
export default function Mapofthis(){
    const {currentUser , logout}=useContext(AuthContext)
    const [posts,setPost]=useState([])
    const location = useLocation();
  const uid = location.pathname.split('/')[2];
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`http://localhost:4000/backend/users/${uid}`);
            setPost(res.data)
            console.log(uid);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, [uid]);
  return(
    <>
    {/* <div className="shadow-lg">
      <div className="flex justify-between items-center py-2 px-10">
        <div className="logo">
          <Link to="/">
          <img className="h-16 w-18" src={Logo} alt="logo" /></Link>
        </div>
        <div className="flex gap-2.5 items-center">
        <span className="cursor-pointer">{currentUser?.username}</span>
        <p onClick={logout} className="cursor-pointer">Logout</p>
          <span className="cursor-pointer border rounded-full h-10 w-12 px-1 py-1.5 bg-blue-100">
            <Link to="/write">Write</Link>
          </span>
    </div>
    <div className="hidden lg:flex gap-2.5 items-center">
        <div className='flex-col'>
      <img src={posts.userImg} alt="" className="w-20 h-20 border rounded-full" />
      <p>{posts[0]?.username}</p>
      </div>
 
      {currentUser?.username === posts[0]?.username && (
            <div>
      <Link to="/">
                <Eraser size={32} color="#2a00fa" weight="fill" className="cursor-pointer" />
              </Link>
              <Trash size={32} color="#fa0000" className="cursor-pointer" /*onClick={handleDelete} />
      </div>
      )}
       </div>
  </div>
    </div>  */}
     <div className="flex flex-row justify-between">
   <div className="mb-2 mt-0 text-xl font-medium flex items-center px-3"><h5 >This Are All Posts By {posts[0]?.username}</h5></div>
   <div><div className="hidden lg:flex gap-2.5 items-center">
        <div className='flex-col'>
      <img src={posts.userImg} alt="" className="w-20 h-20 border rounded-full" />
      <p>{posts[0]?.username}</p>
      </div>
      {currentUser?.username === posts[0]?.username && (
            <div>
      <Link to="/">
                <Eraser size={32} color="#2a00fa" weight="fill" className="cursor-pointer" />
              </Link>
              <Trash size={32} color="#fa0000" className="cursor-pointer" /*onClick={handleDelete}*/ />
      </div>
      
      )}
      </div>
      </div>
       </div>
    <div className="flex flex-wrap justify-center">
  {posts.map((post) => (
    <div className="flex flex-col bg-white rounded-lg shadow-md w-full mx-6 mb-6 overflow-hidden sm:w-52" key={post.id}>
      <img src={`../upload/${post.img}`} alt="" className="h-20 m-6" />
      <Link to={`/post/${post.id}`}>
        <h2 className="text-center px-2 pb-5">{post.title}</h2>
      </Link>
      <p className="italic text-center px-2 pb-5">{moment(post.date).fromNow()}</p>
      <div className="flex flex-row justify-between">
      </div>
      <div className="flex flex-row justify-between mt-auto">
      {currentUser?.username === posts[0]?.username && (
        <>
        <Link to={`/post/${post.id}`}>
      <Trash size={32} color="#fa0000" className="cursor-pointer"/></Link>
        <Link to="/Write?edit=2" state={post}>
          <Eraser size={32} color="#2a00fa" weight="fill" className="cursor-pointer" />
        </Link></>)}
         <Link to={`/post/${post.id}`} className="flex flex-row">
          <p>{post.commentCount}</p>
          <ChatText size={32} color="#2a00fa" weight="fill" />
          </Link>
      </div>
    </div>
  ))}
</div>
</>
  )}