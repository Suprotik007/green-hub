
import React from 'react';

import { Link } from 'react-router';
import image from '../assets/error-garden.jpg'
const ErrorPage = () => {
  return (
    <div>
      
      <div className='mx-4 sm:mx-8 md:mx-20 lg:mx-80    text-center'>
        <img className="w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto" src={image} />
        <Link to='/'>
          <button className="btn  btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
