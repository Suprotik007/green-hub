import React from 'react';

const GardenerCard = ({singleGardener}) => {
    
    
    return (
        <div className='  '>
<div className="card  text-left bg-base-200 m-5  border-2 border-teal-600 shadow-lg">
  <figure className='pt-5 '>
    <img
      src={singleGardener.photo}
       />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {singleGardener.name}
      <div className="badge badge-secondary">{singleGardener.gender}</div>
    </h2>
    <p></p>
    <div className="card-actions justify-end ">
      <div className="badge badge-error ">Age :{singleGardener.age}</div>
      <div className="badge badge-primary">Exp:{singleGardener.experience}y</div>
    </div>
  </div>
</div>
  </div>

        
        
    );
};

export default GardenerCard;