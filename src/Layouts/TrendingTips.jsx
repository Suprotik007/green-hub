import React, { useEffect, useState } from 'react';
import TipsCard from '../Components/tipsCard';
import { Typewriter } from 'react-simple-typewriter';

const TrendingTips = () => {

    const [trendingTips, setTrendingTips] = useState([]);
    
      useEffect(() => {
        fetch('http://localhost:3000/gardeners/tips')
          .then(res => res.json())
          .then(data => {
          
            setTrendingTips(data);
          });
      }, []);
    return (
        <div className='my-10'>
            <h1 className='text-3xl border-b-2 pb-5 w-4/12 mx-auto font-semibold text-center'> <Typewriter
          words={['Trending Tips']}
          loop={0} 
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></h1>
            <div>
            <div className='grid grid-cols-3  pt-8 w-11/12 mx-auto'>
      
      {trendingTips.map(singleTip => (
        <TipsCard key={singleTip._id} singleTip={singleTip} />
      ))}
    </div>
            </div>
        </div>
    );
};

export default TrendingTips;