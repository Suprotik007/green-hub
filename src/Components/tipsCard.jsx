import React from 'react';

const TipsCard = ({singleTip}) => {
    return (
        <div className='m-8'>
        <div className="card    ">
  
  <div className="card  border-2 h-[400px] border-teal-600  shadow-md">
  <figure className="pt-5">
    <img
      src={singleTip.imagesUrl}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{singleTip.title}</h2>
    <p>{singleTip.category}</p>
    <p>{singleTip.description}</p>
    <div className="card-actions">
      <div className="badge text-black p-4 bg-teal-400 flex items-center gap-1" disabled>
                                Likes: {singleTip.totalLiked || 0}
                            </div>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default TipsCard;