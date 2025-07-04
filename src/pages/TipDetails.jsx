

import React, { useEffect, useState } from 'react';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useParams } from 'react-router'; 
import { Typewriter } from 'react-simple-typewriter';
import { BiSolidLike } from "react-icons/bi";

const TipDetails = () => {
  const { _id } = useParams(); 
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeLoading, setLikeLoading] = useState(false);

  useEffect(() => {
    fetch(`https://graden-explorer-server.vercel.app/shareTips/${_id}`) 
      .then(res => res.json())
      .then(data => {
        setTip(data);
        setLoading(false);
      });
  }, [_id]);

  const handleLike = () => {
    if (likeLoading) return;

    setTip(prevTip => ({ ...prevTip, totalLiked: (prevTip.totalLiked || 0) + 1 }));

    fetch(`https://graden-explorer-server.vercel.app/shareTips/${_id}/like`, {
      method: 'PATCH',
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to update like');
      return res.json();
    })
    .then(updatedTip => {
      setTip(updatedTip); 
    });
  };

  if (!tip) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-20">
          <p>Tip not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className='my-10'>
        <h1 className='text-3xl text-teal-700  text-center border-b-2 pb-5 w-8/12 mx-auto font-semibold'>
          <Typewriter
            words={['Tip Details']}
            loop={0} 
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <div className='mt-10 w-11/12 sm:w-9/12 mx-auto'>
          <div className="card rounded-2xl border-3 border-teal-800  bg-amber-20 shadow-sm flex flex-col sm:flex-row">
            <figure className="sm:w-1/2">
              <img 
                src={tip.imagesUrl}
                alt={tip.title}
                className="rounded-xl object-cover w-full p-3"
              />
            </figure>
            <div className="card-body sm:w-1/2">
              <h2 className="text-lg font-semibold">Title : {tip.title}</h2> <br />
              <div className="text-lg font-semibold">Category : {tip.category}</div> <br />
              <p className="text-lg font-semibold">Plant type : {tip.plantType}</p>
              <p className="text-lg font-semibold">Level : {tip.difficulty}</p>
              <p className="font-semibold  ">Description : {tip.description}</p>

              <div className="card-actions justify-end mt-4">
                <button 
                  className="btn btn-accent flex items-center gap-2"
                  onClick={handleLike}
                >
                  <BiSolidLike />  <span>{tip.totalLiked || 0}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TipDetails;
