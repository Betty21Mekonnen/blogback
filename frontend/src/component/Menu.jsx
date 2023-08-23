import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Menu({cat}) {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/backend/posts/?cat=${cat}`)
        setPosts(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[cat])
	// const posts=[
	// 	              {
	// 	                id:1,title:"book1", 
	// 	                desc:"The Debre Damo monastery, which dates back to early Aksumite times, is said to possess the Ethiopia's oldest existing church. Legend has it that Abba Aragawi, one of the 'Nine Saints', while wandering at the foot of the cliff, judged that the plateau above him was a suitable place to live a solitary life. God, hearing his wish, commanded a snake living on the mountain-top to stretch down and lift up the holy man, who made Debre Damo his abode.",
	// 	                image:image2
	// 	              },
	// 	              {
	// 	                id:2,title:"book2",desc:"kmjkgjfi fghjh nnbjbetelhem mekonnen", image:image1
	// 	              }
	// 	          ]
  return (
	<div className="md:w-3/10">
		<h3 className='pb-4 font-bold'>Other Posts You May Like</h3>
         <div className='flex flex-col gap-20'>
       {posts.map((post)=>(
      <div className="flex-col" key={post.id}>
        <div><img className="w-full max-h-80" src={`${import.meta.env.VITE_BACKEND_URL}/upload/${post?.img}`} alt="no" /></div>
        <div><p className="text-2xl font-bold mb-4 capitalize">{post.title}</p>
        <Link to={`/post/${post.id}`} className='p-2 rounded  border border-teal-500 hover:bg-teal-500 hover:text-white text-teal-600 cursor-pointer '>Read More</Link>
        </div>
      </div> 
     )
     )}
  </div>
  </div>
  )
}

