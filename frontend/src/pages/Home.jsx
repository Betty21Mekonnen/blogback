import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/backend/posts${cat}`,);
        console.log(res.data)
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };
console.log(currentUser)
  return (
    <div>
      <div className="mt-10 flex flex-col gap-12">
        {currentPosts.map((post) => (
          <div className="flex flex-col md:flex-row md:gap-20" key={post.id}>
            <div className="md:w-1/3">
              <img className="w-full h-full" src={`${import.meta.env.VITE_BACKEND_URL}/upload/${post.image}`} alt="no" />
            </div>
            <div className="md:w-2/3">
              <Link to={`/post/${post.id}`}>
                <p className="text-2xl font-bold mb-4 capitalize">{post.title}</p>
              </Link>
              <p className="mb-4">{getText(post.descr.slice(0, 1000))}</p>
              {currentUser && !currentUser.hasOwnProperty('message') ? (
  <Link
    to={`/post/${post.id}`}
    className="p-2 rounded border border-teal-500 hover:bg-teal-500 hover:text-white text-teal-600 cursor-pointer"
  >
    Read More
  </Link>
) : (
  <Link className="italic text-teal-600 hover:text-xl" to="/Login">
    Please Login and Read More
  </Link>
)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((item, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`border border-teal-500 rounded cursor-pointer px-1.5 py-2 mx-1.5 hover:bg-teal-500 ${
              currentPage === index + 1 ? 'active' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}