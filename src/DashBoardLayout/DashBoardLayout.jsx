import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router';
import { FaHome, FaBoxOpen, FaMoneyCheckAlt, FaUserEdit, FaSearchLocation } from 'react-icons/fa';
import { AuthContext } from '../provider/Authprovider';
import { toast } from 'react-toastify';


const DashboardLayout = () => {
const { user, logOut } = useContext(AuthContext);
     const handleLogOut = () => {
        logOut()
          .then(() => {
            toast.success('Logged Out successfully');
        
          })
          .catch(() => {
          
          });
      };
    
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar text-teal-600 w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 text-teal-600 px-2 lg:hidden">Dashboard</div>

                </div>
                {/* Page content here */}
                <Outlet></Outlet>
                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                   <a className=" text-3xl pb-5 font-bold font-mono text-teal-600 Kablammo">GreenHub</a>

                    <li className='text-teal-700 text-xl'>
                         <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-teal-600 border-b-2 border-teal-700' : ''
        }
      >
        Home
      </NavLink>
                    </li>

                    <li className='text-teal-700 text-xl'>
                        <NavLink
        to="/dashboard/myTips"
        className={({ isActive }) =>
          isActive ? 'text-teal-600 border-b-2 border-teal-700' : ''
        }
      >
        My Tips
      </NavLink>
                    </li>

                    <li className='text-teal-700 text-xl'>
                        <NavLink
        to="/dashboard/shareTips"
        className={({ isActive }) =>
          isActive ? 'text-teal-600 border-b-2 border-teal-700' : ''
        }
      >
        Share Tips
      </NavLink>
                    </li>

                           <li className='text-teal-700 text-xl'>
                        <NavLink
        
        onClick={handleLogOut}
      >
        Log Out
      </NavLink>
                    </li>
                   
                </ul>
                
            </div>
            
        </div>
    );
};

export default DashboardLayout;