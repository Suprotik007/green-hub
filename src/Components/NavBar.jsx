
import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../provider/Authprovider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

// const [isDark, setIsDark] = useState(false);
const [theme, setTheme] = useState('light');
useEffect(() => {

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    setTheme('light');
    document.documentElement.setAttribute('data-theme', 'light');
  }
}, []);

 const handleToggle = () => {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

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
   <div className=''>

     <div className="navbar rounded-xl px-5 mt-2 bg-green-200 shadow-sm w-11/12 mx-auto  ">
      <div className="navbar-start">
   <div className="dropdown ">
    <div tabIndex={0} role="button" className="btn btn-ghost text-green-800 lg:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
       </div>
       <ul
         tabIndex={0}
         className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-full  p-2   text-xs shadow">
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



      <div className="navbar-end relative gap-6">
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
      <div className=''>

  <label className="toggle text-base-content">
  <input onChange={handleToggle} checked={theme=== 'dark'} type="checkbox" value="synthwave" className="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
</div>
    </div>
   </div>
  );
};

export default Navbar;
