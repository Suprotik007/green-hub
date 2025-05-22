
import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../provider/Authprovider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logged Out successfully');
        setDropdownOpen(false);
      })
      .catch(() => {
      
      });
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const links=(
        
        <div className="flex space-x-8 font-semibold text-green-800">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-green-800 border-b-2 border-green-900' : ''
          }
        >
          Home
        </NavLink>
         <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? 'text-green-800 border-b-2 border-green-900' : ''
          }
        >
          Explore Gardener
        </NavLink>
        <NavLink
          to="/shareTips"
          className={({ isActive }) =>
            isActive ? 'text-green-800 border-b-2 border-green-900' : ''
          }
        >
          Share a Garden Tip 
        </NavLink>
        <NavLink
          to="/browseTips"
          className={({ isActive }) =>
            isActive ? 'text-green-800 border-b-2 border-green-900' : ''
          }
        >
          Browse Tips
        </NavLink>
       
        <NavLink
          to="/myTips"
          className={({ isActive }) =>
            isActive ? 'text-green-800 border-b-2 border-green-900' : ''
          }
        >
          My Tips
        </NavLink>
      </div>
  )

  return (
    <div className="navbar rounded-xl px-5 mt-2 bg-green-200 shadow-sm w-11/12 mx-auto">
      <div className="navbar-start">
   <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
       </div>
       <ul
         tabIndex={0}
         className="menu menu-sm dropdown-content text-white  rounded-box z-1 mt-3 w-full p-2 shadow">
          {links}
       </ul>
     </div>
     <a className=" text-xl font-bold font-mono text-green-800 Kablammo">GreenHub</a>
   </div>
   <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1 ">
       {links}
     </ul>
  </div> 

      <div className="navbar-end relative">
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <img
              src={user.photoURL || ''}
              alt={user.displayName || 'User'}
              title={user.displayName || ''}
              className="w-12 h-12 rounded-full cursor-pointer border border-green-700"
              onClick={() => setDropdownOpen((prev) => !prev)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg border border-gray-200 z-20">
                <div className="px-4 py-2 border-b border-gray-100 text-green-400 font-semibold">
                  {user.displayName || 'User'}
                </div>
                <button
                  onClick={handleLogOut}
                  className="w-full text-left px-4 py-2 hover:bg-white text-red-400 font-semibold"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="btn hover:text-white hover:bg-black btn-outline">Login</button>
          </Link>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
