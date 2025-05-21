import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import { Link } from 'react-router';

const BrowseTips = () => {
    return (
        <div>
          <Navbar></Navbar>
          <div className='w-9/12 mx-auto my-10'>
         <h1 className='text-3xl font-bold border-b-3 text-center pb-5  '> Public Tips </h1>
            <div>

<ul className="list bg-base-100   rounded-box  pt-10">
  
  <li className="list-row border-3 mb-5">
    <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div className="list-col-grow">
      <div>Dio Lupa</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
    <Link to='/tipDetails'><button className="btn btn-outline hover:bg-green-900 hover:text-white btn-ghost">
      see More
    </button></Link>
  </li>
  
  
  
</ul>

            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default BrowseTips;