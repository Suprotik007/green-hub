
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useParams } from 'react-router'; 

const TipDetails = () => {
    const { _id } = useParams(); 
    const [tip, setTip] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
  fetch(`http://localhost:3000/shareTips/${_id}`) 
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
      setTip(data);
      setLoading(false);
    })
    // .catch(error => {
    //   console.error('Failed to fetch tip details:', error);
    //   setLoading(false);
    // });
}, [_id]);

  
   

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
                <h1 className='text-3xl text-center border-b-2 pb-5 w-8/12 mx-auto font-semibold text-green-800'>
                    See more about the Tip
                </h1>

                <div className='mt-10 w-9/12 mx-auto'>
                    <div className="card card-side  border-2 bg-amber-200 shadow-sm">
                        <figure>
                            <img 
                                src={tip.imagesUrl }
                                className="w-64 h-64 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-lg font-semibold">Title : {tip.title}</h2>
                            <div className="text-lg font-semibold">Category : {tip.category}</div>
                            <p className='text-lg font-semibold'>Plant type : {tip.plantType}</p>
                            <p className='text-lg font-semibold'>Level : {tip.difficulty}</p>
                            <p className='font-semibold  text-purple-800'>Description : {tip.description}</p>
                        
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Like</button>
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