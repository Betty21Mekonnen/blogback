import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image2.png';
import '../pages/Write';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
export default function Navbar() {
  const {currentUser , logout}=useContext(AuthContext)
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="shadow-lg">
      <div className="flex justify-between items-center py-2 px-10">
        <div className="logo">
          <img className="h-16 w-18" src={Logo} alt="logo" />
        </div>
        <div className={`hidden lg:flex gap-2.5 items-center ${showMenu ? '' : 'hidden'}`}>
          <Link to="/?cat=art">
            <h6 className="text-base">Art</h6>
          </Link>
          <Link to="/?cat=scince">
            <h6 className="text-base">Science</h6>
          </Link>
          <Link to="/?cat=technology?">
            <h6 className="text-base">Technology</h6>
          </Link>
          <Link to="/?cat=cinema">
            <h6 className="text-base">Cinema</h6>
          </Link>
          <Link to="/?cat=design">
            <h6 className="text-base">Design</h6>
          </Link>
          <Link to="/?cat=food">
            <h6 className="text-base">Food</h6>
          </Link>
        </div>
        <div className="flex gap-2.5 items-center">
          <span className="cursor-pointer">{currentUser?.username}</span>
         {currentUser ? (<span onClick={logout} className="cursor-pointer">Logout</span>):
         <Link to="/login">Login</Link>
         }
          <span className="cursor-pointer border rounded-full h-10 w-12 px-1 py-1.5 bg-blue-100">
            <Link to="./write">Write</Link>
          </span>
          <button className="lg:hidden" onClick={handleMenuToggle}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`lg:hidden ${showMenu ? '' : 'hidden'}`}>
        <div className="flex flex-col items-center">
          <Link to="/?cat=art">
            <h6 className="text-base my-2">Art</h6>
          </Link>
          <Link to="/?cat=scince">
            <h6 className="text-base my-2">Science</h6>
          </Link>
          <Link to="/?cat=technology?">
            <h6 className="text-base my-2">Technology</h6>
          </Link>
          <Link to="/?cat=cinema">
            <h6 className="text-base my-2">Cinema</h6>
          </Link>
          <Link to="/?cat=design">
            <h6 className="text-base my-2">Design</h6>
          </Link>
          <Link to="/?cat=food">
            <h6 className="text-base my-2">Food</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}