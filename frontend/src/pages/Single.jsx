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
        const res = await axios.get(`http://localhost:4000/backend/posts/${postId}`);
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
        const res = await axios.get(`http://localhost:4000/backend/posts/comment/${postId}`);
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
      await axios.delete(`http://localhost:4000/backend/posts/${postId}`, {
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
        `http://localhost:4000/backend/posts/comment/${postId}`,
        { comment, date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') },
        {
          method: 'post',
          withCredentials: true,
        }
      );
      setComment('');
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
    <div className="flex gap-20 px-8 py-4">
      <div className="w-7/10">
        <img className="w-screen max-h-96" src={`../upload/${post?.img}`} alt="" />
        <div className="flex items-center">
         <Link to={`/user/${post.userId}`}>  {post.userImg ? (
            <img src={post.userImg} alt="" className="w-12 h-12 border rounded-full" />
          ) : (
            <div className="w-8 h-8 border rounded-full flex items-center justify-center text-white bg-teal-500">
              <Avatar style={{ backgroundColor: 'teal' }}>{post.username?.charAt(0)} </Avatar>
            </div>
          )}</Link>
          <div>
            <p>{post.username}</p>
            <p className="text-xs">{moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div>
              <Link to="/Write?edit=2" state={post}>
                <Eraser size={32} color="#2a00fa" weight="fill" className="cursor-pointer" />
              </Link>
              <Trash size={32} color="#fa0000" className="cursor-pointer" onClick={handleDelete} />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 m-4">
          <h1 className="text-2xl font-bold mb-4 capitalize">{post.title}</h1>
          <p className="text-justify capitalize mb-4">{getText(post.descr)}</p>

          <div>
          {displayedComments.map((comm) => (
              <div className="flex items-center">
                {post.userImg ? (
                  <img src={post.userImg} alt="" className="w-12 h-12 border rounded-full" />
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
            ))}
          </div>
          {comments.length > 2 && (
           <button
           className="italic text-bold  mt-2 cursor-pointer"
           onClick={toggleComments}
         >
           {showAllComments ? 'View Less' : `View All ${comments.length} Comments `}
         </button>
          )}
         <div className="pt-1 pl-3 pb-3 shadow-xl border border-t-2">
            <p className="text-lg font-bold mb-2 capitalize ml-4">Add your comment here!</p>
            <form onSubmit={addComment}>
              <TextareaAutosize
                className="border ml-4"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                aria-label="minimum height"
                minRows={3}
                placeholder="Add a comment..."
                style={{ width: 500, padding: '5px' }}
              />
              <div className="pt-1">
                <button type="submit" className="bg-teal-600 text-white rounded p-1.5 ml-8" disabled={!comment}>
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
}