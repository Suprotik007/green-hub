import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import { Link } from 'react-router';

const BrowseTips = () => {

  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/shareTips')  // Replace with your actual API URL
      .then(res => res.json())
      .then(data => setTips(data))
      .catch(err => console.error('Failed to fetch tips:', err));
  }, []);

  const publicTips = tips.filter(tip => tip.availability === 'Public');

    return (
        <div>
          <Navbar></Navbar>
          <div className='w-9/12 mx-auto my-10'>
         <h1 className='text-3xl font-bold border-b-3 text-center pb-5  '> Public Tips </h1>
            <div>
             
             

<ul className="list bg-base-100   rounded-box  pt-10">
  {tips.length === 0 && <p>Loading tips...</p>}
  {
              publicTips.map((tip,index)=><li className="list-row border-3 mb-5">
    <div className="text-3xl font-thin opacity-80 tabular-nums text-teal-500">{String(index+1)})</div>
    <div><img className="size-11 rounded-box " src={tip.imagesUrl}/></div>
    <div className="list-col-grow">
      <div className='font-semibold text-xl'>{tip.title}</div>
      <div className="text-xs  uppercase font-semibold opacity-60">{tip.category}</div>
    </div>
    <Link to={`/tipDetails/${tip._id}`}><button className="btn btn-outline hover:bg-green-900 hover:text-white btn-ghost">
      see More
    </button></Link>
  </li>
   )
             }
  
  
  
</ul>

            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default BrowseTips;

