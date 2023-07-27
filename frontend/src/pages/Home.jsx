import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/image2.png'
import image2 from '../assets/Logo.png'
export default function Home() { 
  const posts=[
                {
                  id:1,title:"book1", desc:"hellonjkfkhguf mfngjfhj njvhuiy nvbjgiur bvnbgdfj" ,image:image2
                },
                {
                  id:2,title:"book2",desc:"kmjkgjfi fghjh nnbjbetelhem mekonnen", image:image1
                }
            ]
  return (
  <div>
	 <div className="mt-10 flex flex-col gap-10">
     {posts.map((post)=>(
      <div className="flex gap-12" key={post.id}>
        <div className="basis-1/3"><img className="w-full max-h-96" src={post.image} alt="no" /></div>
        <div  className='basis-2/3'><Link to={`/post/${post.id}`}><p>{post.title}</p></Link>
        <p>{post.desc}</p>
        <button className='px-1hn rounded  border border-teal-500  text-teal-600 cursor-pointer '>Read More</button>
        </div>
      </div> 
     )

     )}
  </div>
  </div>
  )
}

