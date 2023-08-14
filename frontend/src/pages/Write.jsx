import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation,useNavigate } from 'react-router-dom';
import moment from 'moment';
export default function Write() {
  const state=useLocation().state
    const [value,setValue]=useState(state?.descr || "")
    const [title,setTitle]=useState(state?.title || "")
    const [cat,setCat]=useState(state?.cat || "")
    const [file ,setFile]=useState()
    const upload=async()=>{
      try{
        const formData=new FormData();
        formData.append("file",file)
        const res = await axios.post('http://localhost:4000/backend/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return res.data
      }
      catch(err){
         console.log(err)
      }
    }
    const navigate = useNavigate()
    const handleSubmit=async e=>{
      e.preventDefault()
      const imgurl=await upload()
      try {
        const config = {
          withCredentials: true,
        };
    
        if (state) {
          await axios.put(`http://localhost:4000/backend/posts/${state.id}`, {
            title,
            descr: value,
            cat,
            img: file ? imgurl : "",
          }, config);
        } else {
          await axios.post(`http://localhost:4000/backend/posts/`, {
            title: title,
            descr: value,
            cat: cat,
            img: file ? imgurl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          }, config);
          navigate("/")
        }
      } catch (err) {
        console.log(err);
      }
    };
    
  return (
	<div className='flex  gap-5 mt-5'>
     <div className='flex flex-col gap-5 w-7/10'>
        <input className="p-2.5 border border-gray-200" value={title} type="text" placeholder='title' onChange={e=>setTitle(e.target.value)}/>
        <div className="h-80 overflow-scroll" >
        <ReactQuill className="h-full" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
     <div className='w-3/10 flex flex-col gap-5'>
      <div className=" p-2 border border-gray-300 p-10px flex-1 flex flex-col justify-between" >
      <h1>Publish</h1>
      <span><b>Status :</b>Draft</span>
      <span><b>Visiblity:</b>Public</span>
      <input className="hidden" type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
      <label htmlFor="file" className='cursor-pointer'>Upload Image</label>
      <div className='flex justify-end'>
        <button className="text-teal-600 border border-teal-600 p-1 mr-1">Save as draft</button>
        <button  onClick={handleSubmit} className="bg-teal-600 text-white p-1.5">Publish</button>
      </div>
      </div>
      <div className=" p-2 border border-gray-300 p-10px flex-1 flex flex-col justify-between">
        <h1>catagory</h1>
        <div>
        <input type="radio" name="cat"  checked={cat==="art"}value="art" id="art" onChange={e=>setCat(e.target.value)}/>
        <label htmlFor="art">Art</label>
        </div>
       <div>
       <input type="radio" name="cat" checked={cat==="science"} value="science" id="science" onChange={e=>setCat(e.target.value)}/>
       <label htmlFor="science">science</label>
       </div>
        <div>
        <input type="radio" name="cat" checked={cat==="Technology"} value="Technology" id="Technology" onChange={e=>setCat(e.target.value)}/>
        <label htmlFor="Technology">Technology</label>
        </div>
       <div>
        <input type="radio" name="cat"  checked={cat==="Food"} value="Food" id="Food" onChange={e=>setCat(e.target.value)}/>
        <label htmlFor="Food">Food</label>
       </div>
       <div>
        <input type="radio" name="cat" checked={cat==="cinema"} value="cinema" id="cinema" onChange={e=>setCat(e.target.value)}/>
        <label htmlFor="cinema">Cinema</label>
       </div>
        <div>
          <input type="radio" name="cat"  checked={cat==="design"} value="design" id="design" onChange={e=>setCat(e.target.value)}/> 
          <label htmlFor="design">Design</label>
         </div>
      </div>
     </div>
  </div>
  )
}
