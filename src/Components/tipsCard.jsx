import React from 'react';

const TipsCard = ({singleTip}) => {
    return (
        <div className='m-8'>
        <div className="card image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">Tip No : {singleTip.id}</h2>
    <p>{singleTip.tip}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default TipsCard;