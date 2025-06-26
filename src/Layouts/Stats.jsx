import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Stats = () => {
    return (
        <div className=' hidden sm:block  mx-auto my-10'>
            <h1 className='text-3xl w-3/12 mx-auto font-semibold text-center border-b-2 text-teal-800  pb-6'><Typewriter
                      words={['Statistics']}
                      loop={0} 
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    /> </h1>
            <div className='pt-6 md:ml-35 lg:ml-80'>
                <div className="stats   mx-aut0 bg-base-300 shadow">
  <div className="stat ">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Total Visitors</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="grid grid-cols-1">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Site Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      
    </div>
    <div className="stat-value">1956+</div>
    <div className="stat-title">Regular Users</div>
    <div className="stat-desc text-secondary">More than 75% of the sites</div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Stats;

