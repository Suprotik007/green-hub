import React from 'react';

const TipsCard = ({singleTip}) => {
    return (
        <div className='m-8'>
        <div className="car  bg-base-300 border-2 border-dashed text-green-900 w-96 shadow-sm">
  
  <div className="card-body ">
    <h2 className="card-title">Tip No : {singleTip.id}</h2>
    <p>{singleTip.tip}</p>
    
  </div>
</div>
        </div>
    );
};

export default TipsCard;