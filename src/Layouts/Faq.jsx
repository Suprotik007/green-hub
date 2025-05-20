import React from 'react';

const Faq = () => {
    return (
        <div className='w-8/12 mx-auto  '>
            <h1 className='text-3xl font-semibold text-center py-10 border-b-2'>Frequently Asked Questions</h1>
           <div className=''>

 <div className="collapse   collapse-arrow bg-green-100 border  mt-10">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">How do I prepare soil for planting?</div>
  <div className="collapse-content text-sm">
    Test your soil first, then add compost or organic matter to improve fertility and drainage before planting.
  </div>
</div>

<div className="collapse collapse-arrow  mt-1 border-1  bg-green-100">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold   ">What is the best time to water my garden?</div>
  <div className="collapse-content text-sm">
    Water early in the morning to minimize evaporation and help plants absorb moisture effectively.
  </div>
</div>

<div className="collapse collapse-arrow bg-green-100 mt-1 border ">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How often should I prune my plants?</div>
  <div className="collapse-content text-sm">
    Prune regularly during the growing season to remove dead branches and encourage healthy growth.
  </div>
</div>

<div className="collapse collapse-arrow border bg-green-100 mt-1">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How can I control pests naturally?</div>
  <div className="collapse-content text-sm">
    Use natural predators like ladybugs, neem oil sprays, or companion planting to reduce pest problems without chemicals.
  </div>
</div>

<div className="collapse collapse-arrow  border bg-green-100 mt-1">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What are the benefits of mulching?</div>
  <div className="collapse-content text-sm">
    Mulching helps retain soil moisture, suppress weeds, and regulate soil temperature for healthier plants.
  </div>
</div>

<div className="collapse collapse-arrow  border bg-green-100 mt-1">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How do I rotate crops in my garden?</div>
  <div className="collapse-content text-sm">
    Change the location of plant families each season to prevent soil depletion and reduce pests and diseases.
  </div>
</div>

           </div>

        </div>
    );
};

export default Faq;