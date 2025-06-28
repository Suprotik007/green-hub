

import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('https://graden-explorer-server.vercel.app/shareTips')
      .then(res => res.json())
      .then(data => setTips(data))
      // .catch(err => console.error('Failed to fetch tips:', err));
  }, []);

  const publicTips = tips.filter(tip => tip.availability === 'Public');

  const filteredTips = publicTips.filter(tip => {
    if (filter === 'All') return true;
    return tip.difficulty === filter;
  });

  return (
    <div>
      <Navbar />
      <div className='w-11/12 sm:w-9/12 mx-auto my-10'>
        <h1 className='text-3xl text-teal-700 w-8/12 sm:w-6/12 mx-auto font-bold border-b-3 text-center pb-5'>
          <Typewriter
            words={['Public Tips']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <div className="flex flex-wrap justify-center mt-5 space-x-4 mb-6">
          {['All', 'Easy', 'Medium', 'Hard'].map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`btn btn-sm ${
                filter === level
                  ? 'bg-teal-700 text-white'
                  : 'bg-gray-300 text-gray-700 hover:bg-black hover:text-white'
              } mb-2 sm:mb-0`}
            >
              {level}
            </button>
          ))}
        </div>

        <ul className="list bg-base-100 rounded-box pt-10 space-y-5">
          {tips.length === 0 && <p>Loading tips...</p>}

          {filteredTips.length === 0 && tips.length > 0 && (
            <p className="text-center text-gray-500">No tips found for "{filter}" difficulty.</p>
          )}

          {filteredTips.map((tip, index) => (
            <li
              key={tip._id}
              className="list-row border-teal-700 border-3 p-4 rounded shadow flex flex-row flex-nowrap items-center space-x-4"
            >
              <div className="text-3xl font-thin opacity-80 tabular-nums  flex-shrink-0">
                {String(index + 1)}) 
              </div>
{/* hidden sm:block */}
              <div className="flex-shrink-0 ">
                <img
                  className="w-10 h-10   md:w-20 md:h-20 rounded-box object-cover"
                  src={tip.imagesUrl || 'https://via.placeholder.com/80'}
                  alt={tip.title}
                />
              </div>

              <div className="list-col-grow flex-grow min-w-0">
                <div className="font-semibold text-xl truncate">{tip.title}</div>
                <div className="text-xs uppercase font-semibold opacity-60 truncate">{tip.category}</div>
              </div>

              <div className="flex-shrink-0">
                <Link to={`/tipDetails/${tip._id}`}>
                  <button className="btn btn-outline btn-xs md:btn-md  hover:bg-teal-800 hover:text-white btn-ghost whitespace-nowrap">
                    See More
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default BrowseTips;
