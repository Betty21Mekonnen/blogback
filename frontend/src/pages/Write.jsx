import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import moment from 'moment';
import writevalidation from '../validation/Validation';
export default function Write() {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.descr || '');
  const [title, setTitle] = useState(state?.title || '');
  const [cat, setCat] = useState(state?.cat || '');
  const [file, setFile] = useState();
  const [errors,seterrors]=useState([])
  const {currentUser}=useContext(AuthContext)
 
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const errors = writevalidation(title, value, cat, file);
    if (errors !== null) {
      seterrors(errors)
      console.log(errors)
      return; 
    }
    if(errors==null){
    e.preventDefault();
    const imgurl = await upload();
    try {
      const config = {
        withCredentials: true,
      };

      if (state) {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/backend/posts/${state.id}`, {
          title,
          descr: value,
          cat,
          img: file ? imgurl : '',
        },config);
      } else {
       // const { data } =await axios.post(`${import.meta.env.VITE_BACKEND_URL}/backend/posts/`, {
        const { data } =await axios.post(`${import.meta.env.VITE_BACKEND_URL}/backend/posts/`, {
        
          title: title,
          descr: value,
          cat: cat,
          img: file ? imgurl : '',
          date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        },config);
        // alert(data.message)
        // navigate('/');
      }
    } catch (err) {
      console.log(err);
    }}
    const error=currentUser?.message
    if(error!=null){
      alert(error)
    }
   
    navigate('/');
  };

  return (
    <div className='flex flex-col md:flex-row gap-5 mt-5'>
      <div className='flex flex-col gap-5 w-full md:w-7/12'>
        <input
          className='p-2.5 border border-gray-200'
          value={title}
          type='text'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
       {errors.find(error => error.title) && <p className='text-red-500'>{errors.find(error => error.title).title}</p>} 

        <div className='h-80 overflow-scroll'>
          <ReactQuill className='h-full' theme='snow' value={value} onChange={setValue}  />
        </div>
        {errors.find((error) => error.value) && (
        <p className='text-red-500'>
          {errors.find((error) => error.value).value}
        </p>
      )}
      </div>
    
      <div className='w-full md:w-5/12 flex flex-col gap-5'>
        <div className='p-2 border border-gray-300 p-10px flex-1 flex flex-col justify-between'>
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input className='hidden' type='file' id='file' onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor='file' className='cursor-pointer'>
            Upload Image
          </label>
          {errors.find(error => error.image) && <p className='text-red-500'>{errors.find(error => error.image).image}</p>} 
          <div className='flex justify-end'>
            <button className='text-teal-600 border border-teal-600 p-1 mr-1'>Save as draft</button>
            <button onClick={handleSubmit} className='bg-teal-600 text-white p-1.5'>
              Publish
            </button>
          </div>
        </div>
        <div className='p-2 border border-gray-300 p-10px flex-1 flex flex-col justify-between'>
          <h1>Category</h1>
          <div>
            <input
              type='radio'
              name='cat'
              checked={cat === 'art'}
              value='art'
              id='art'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='art'>Art</label>
          </div>
          <div>
            <input
              type='radio'
              name='cat'
              checked={cat === 'science'}
              value='science'
              id='science'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='science'>Science</label>
          </div>
          <div>
            <input
              type='radio'
              name='cat'
              checked={cat === 'Technology'}
              value='Technology'
              id='Technology'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='Technology'>Technology</label>
          </div>
          <div>
            <input
              type='radio'
              name='cat'
              checked={cat === 'Food'}
              value='Food'
              id='Food'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='Food'>Food</label>
            {errors.find(error => error.cat) && <p className='text-red-500'>{errors.find(error => error.cat).cat}</p>} 
          </div>
        </div>
      </div>
    </div>
  );
}