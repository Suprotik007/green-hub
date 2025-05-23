import React, { useEffect, useState } from 'react';
import DtlGardenersCard from '../Components/dtlGardenersCard';
import Navbar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Typewriter } from 'react-simple-typewriter';

const AllGardeners = () => {
    const [allGardeners, setAllGardeners] = useState([]);
    
      useEffect(() => {
        fetch('https://graden-explorer-server.vercel.app/allGardeners')
          .then(res => res.json())
          .then(data => {
          
            setAllGardeners(data);
          });
      }, []);
    return (
        <div>
            
            <div>
                <Navbar></Navbar>
<div className='w-12/12 mx-auto my-10 gap-8'>
    <h1 className='text-3xl text-center font-semibold mt-10 border-b-3 pb-5  w-4/12 mx-auto mb-5'><Typewriter
              words={['All Gardeners']}
              loop={0} 
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /></h1>
     <div className='sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-8 pt-8 '>
      
      {allGardeners.map(gardener => (
         <DtlGardenersCard key={gardener._id} gardener={gardener} />
    
      ))}
    </div>
   </div>
   <Footer></Footer>
            </div>
            
        </div>
    );
};

export default AllGardeners;