import React from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
// import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const handleLogOut=()=>{
    logOut().then(() => {
      toast.success('Logged Out successfully')
    }).catch((error) => {
      // console.log(error);
      
    });
    
  }
//   const {user,logOut}=use(AuthContext)
  
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
          to="/plans"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
          }
        >
          Share a Garden Tip 
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
          }
        >
          Explore Gardener
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
          }
        >
          My Tips
        </NavLink>
      </div>


    )
    return (
      

        <div className="navbar rounded-xl px-5 mt-2 bg-green-100  shadow-sm w-11/12 mx-auto">
         
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  bg-black text-white  rounded-box z-1 mt-3 w-52 p-2 shadow">
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
  <div className="navbar-end gap-3 ">
  <p className='text-black text-xs sm:block hidden '></p>
    <img className='w-12 rounded-full ' src={userImg} />
    
    
      
<button onClick={handleLogOut} className="btn  hover:text-black btn-outline">Log Out</button>

      {/* (<Link to='/auth/login'><button className="btn text-white hover:text-black btn-outline">Login</button></Link>) */}
    
    <ToastContainer />
  </div>
</div>
    );
};

export default Navbar;