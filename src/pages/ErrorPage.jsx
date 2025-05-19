
import React from 'react';
import error from '../assets/error.jpg'
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div>
      
      <div className='mx-4 sm:mx-8 md:mx-20 lg:mx-80 my-10 sm:my-16 md:my-20 text-center'>
        <img className="w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto" src={error} />
        <Link to='/'>
          <button className="btn mt-8 sm:mt-10 btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
