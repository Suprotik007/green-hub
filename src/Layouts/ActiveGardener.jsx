

import React, { useEffect, useState } from 'react';
import GardenerCard from '../Components/GardenerCard';

const ActiveGardener = () => {
  const [activeGardeners, setActiveGardeners] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/gardeners/active')
      .then(res => res.json())
      .then(data => {
      
        setActiveGardeners(data);
      });
  }, []);

  return (
   <div>
    <h1 className='text-3xl text-center font-semibold mt-10 mb-5'>Active Gardeners</h1>
     <div className='grid grid-cols-3 w-11/12 mx-auto'>
      
      {activeGardeners.map(singleGardener => (
        <GardenerCard key={singleGardener.id} singleGardener={singleGardener} />
      ))}
    </div>
   </div>
  );
};

export default ActiveGardener;
