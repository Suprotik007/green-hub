

import React, { useEffect, useState } from 'react';
import GardenerCard from '../Components/GardenerCard';
import { Typewriter } from 'react-simple-typewriter'
const ActiveGardener = () => {
  const [activeGardeners, setActiveGardeners] = useState([]);

  useEffect(() => {
    fetch('https://graden-explorer-server.vercel.app/gardeners/active')
      .then(res => res.json())
      .then(data => {
      
        setActiveGardeners(data);
      });
  }, []);

  return (
   <div className='w-12/12 mx-auto gap-8'>
    <h1 className='text-3xl text-center font-semibold mt-10 border-b-2 pb-5  w-4/12 mx-auto mb-5'>
     <Typewriter
          words={['Active Gardeners']}
          loop={0} 
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></h1>
     <div className='grid grid-cols-3 w-11/12 mx-auto pt-8 '>
      
      {activeGardeners.map(singleGardener => (
        <GardenerCard key={singleGardener.id} singleGardener={singleGardener} />
      ))}
    </div>
   </div>
  );
};

export default ActiveGardener;
