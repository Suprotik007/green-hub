import React from 'react';

const DtlGardenersCard = ({gardener}) => {
    return (
        <div>
            <div className="car card-side p-5 rounded-2xl bg-base-300 border-2   border-teal-700  shadow-sm">
  <figure>
    <img className=' rounded-2xl'
      src={gardener.photo} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{gardener.name}</h2>
    <div className='grid grid-cols-2 gap-3'>
        <p className='font-semibold'>Gender : <span className='badge badge-neutral text-teal-300'>{gardener.gender}</span></p>
    <p className='font-semibold'>Age : <span className='badge badge-neutral text-teal-300'>{gardener.age}</span></p>
    <p className='font-semibold'>Activity : <span className='badge badge-neutral text-teal-300'>{gardener.activity}</span></p>
    <p className='font-semibold'>Tips : <span className='badge badge-neutral text-teal-300'>{gardener.total_shared_tips}</span></p>
    <p className='font-semibold'>Exp : <span className='badge badge-neutral text-teal-300'>{gardener.experience}y</span></p>
    
    </div>
   
  </div>
</div>
        </div>
    );
};

export default DtlGardenersCard;