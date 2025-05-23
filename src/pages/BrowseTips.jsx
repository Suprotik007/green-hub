
import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import { Link } from 'react-router';  

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [filter, setFilter] = useState('All'); 

  useEffect(() => {
    fetch('http://localhost:3000/shareTips')
      .then(res => res.json())
      .then(data => setTips(data))
      .catch(err => console.error('Failed to fetch tips:', err));
  }, []);
  const publicTips = tips.filter(tip => tip.availability === 'Public');

  
  const filteredTips = publicTips.filter(tip => {
    if (filter === 'All') return true;
    return tip.difficulty === filter;
  });

  return (
    <div>
      <Navbar />
      <div className='w-9/12 mx-auto my-10'>
        <h1 className='text-3xl font-bold border-b-3 text-center pb-5'>Public Tips</h1>

      
        <div className="flex justify-center mt-5 space-x-4 mb-6">
          {['All', 'Easy', 'Medium', 'Hard'].map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`btn btn-sm ${
                filter === level
                  ? 'bg-green-800 text-white'
                  : 'bg-gray-300 text-gray-700 hover:bg-green-500 hover:text-white'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <ul className="list bg-base-100 rounded-box pt-10">
          {tips.length === 0 && <p>Loading tips...</p>}

          {filteredTips.length === 0 && tips.length > 0 && (
            <p className="text-center text-gray-500">No tips found for "{filter}" difficulty.</p>
          )}

          {filteredTips.map((tip, index) => (
            <li key={tip._id} className="list-row border-3 mb-5 flex items-center  p-4 rounded shadow">
              <div className="text-3xl font-thin opacity-80 tabular-nums text-green-800">{String(index + 1)})</div>
              <div>
                <img className="size-11 rounded-box" src={tip.imagesUrl || 'https://via.placeholder.com/80'} alt={tip.title} />
              </div>
              <div className="list-col-grow">
                <div className="font-semibold text-xl">{tip.title}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{tip.category}</div>
                
              </div>
              
                <Link to={`/tipDetails/${tip._id}`}>
                <button className="btn btn-outline    hover:bg-green-900 hover:text-white ml-110 btn-ghost">See More</button>
              </Link>
              
            </li>
          ))}
        </ul> 
      </div>
      <Footer />
    </div>
  );
};

export default BrowseTips;
