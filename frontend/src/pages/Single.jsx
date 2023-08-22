import { useState, useEffect, useContext } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Eraser, Trash } from 'phosphor-react';
import Menu from '../component/Menu';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import { AuthContext } from '../context/authContext';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Single() {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const location = useLocation();
  const postId = location.pathname.split('/')[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/backend/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/backend/posts/comment/${postId}`,{withCredentials: true,});
        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/backend/posts/${postId}`, {
        method: 'DELETE',
         withCredentials: true,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };


  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/backend/posts/comment/${postId}`,
        { comment, date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') },
        {
          method: 'post',
           withCredentials: true,
        }
      );
      setComment('');
      alert(data.message) 
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };

  const toggleComments = () => {
    setShowAllComments(!showAllComments);
  };

  const displayedComments = showAllComments ? comments : comments.slice(0, 2);
  return (
    <div className="flex flex-col md:flex-row gap-20 px-8 py-4" key={post?.id}>
    <div className="w-full md:w-7/10">
      <img className="w-full h-auto max-h-96" src={`../upload/${post?.img}`} alt="" />
      <div className="flex items-center mt-4">
        <Link to={post.userId ? `/user/${post.userId}` : '#'}>
          {post.userImg ? (
            <img src={`../upload/${post?.userImg}`} alt="" className="w-12 h-12 border rounded-full" />
          ) : (
            <div className="w-8 h-8 border rounded-full flex items-center justify-center text-white bg-teal-500">
              <Avatar style={{ backgroundColor: 'teal' }}>{post.username?.charAt(0)}</Avatar>
            </div>
          )}
        </Link>
        <div className="ml-2">
          <div> {post.userId ? "" : <p className='text-red-500 font-bold'>DELETED ACCOUNT.</p>}{post.username}</div>
          <p className="text-xs">{moment(post.date).fromNow()}</p>
        </div>
        {currentUser?.username === post.username && (
          <div>
            <Link to={`/Write?edit=${post.id}`} state={post}>
              <Eraser size={32} color="#2a00fa" weight="fill" className="cursor-pointer" />
            </Link>
            <Trash size={32} color="#fa0000" className="cursor-pointer" onClick={handleDelete} />
          </div>
        )}
      </div>
      <div key={post?.userId} className="flex flex-col gap-4 mt-4">
        <h1 className="text-2xl font-bold mb-4 capitalize">{post.title}</h1>
        <p className="text-justify capitalize mb-4">{getText(post.descr)}</p>
        {displayedComments.map((comm) => (
          <div key={comm.id}>
            <div className="flex items-center mb-4">
              {comm.userImg ? (
                <img src={`../upload/${comm?.userImg}`} alt="" className="w-8 h-8 border rounded-full" />
              ) : (
                <div className="w-6 h-6 border rounded-full flex items-center justify-center text-white bg-teal-500">
                  <Avatar style={{ backgroundColor: 'teal' }}>{comm.username.charAt(0)}</Avatar>
                </div>
              )}
              <div className="flex flex-col ml-2">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-sm">{comm.username}</p>
                  <p className="text-xs italic">{moment(comm.date).fromNow()}</p>
                </div>
                <p className="text-sm capitalize mb-4">{comm.comment}</p>
              </div>
            </div>
          </div>
        ))}
        {comments.length > 2 && (
          <button className="italic text-bold mt-2 cursor-pointer" onClick={toggleComments}>
            {showAllComments ? 'View Less' : `View All ${comments.length} Comments `}
          </button>
        )}
        <div className="pt-1 pl-3 pb-3 shadow-xl border border-t-2 mt-4">
          <p className="text-lg font-bold mb-2 capitalize ml-4">Add your comment here!</p>
          <form onSubmit={addComment}>
            <TextareaAutosize
              className="border ml-4"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              aria-label="minimum height"
              minRows={3}
              placeholder="Add a comment..."
              style={{ width: '100%', padding: '5px' }}
            />
            <div className="pt-1">
            <button
             type="submit"
             className={`bg-teal-600 text-white rounded p-1.5 ml-8 ${!comment ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!comment}
            >
                Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Menu cat={post?.cat} key={post.cat} />
  </div>
  );
}