import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/Lalibela.jpg'
import image2 from '../assets/debredamo.jpg'
export default function Home() { 
  const posts=[
                {
                  id:1,title:"book1", 
                  desc:"The Debre Damo monastery, which dates back to early Aksumite times, is said to possess the Ethiopia's oldest existing church. Legend has it that Abba Aragawi, one of the 'Nine Saints', while wandering at the foot of the cliff, judged that the plateau above him was a suitable place to live a solitary life. God, hearing his wish, commanded a snake living on the mountain-top to stretch down and lift up the holy man, who made Debre Damo his abode.",
                  image:image2
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

