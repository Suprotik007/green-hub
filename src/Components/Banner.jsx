
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


import img1 from '../assets/garden-slide-1(1).jpg';
import img2 from '../assets/garden-slide-2.jpg';
import img3 from '../assets/garden-slide-3.jpg';

const Banner = () => {
  return (
    <div className="mt-15  p-3 w-11/12 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-box h-[70vh] max-h-[600px]" 
      >

        <SwiperSlide className="relative">
          <img
            src={img1}
            className="w-full h-full object-cover rounded-box"
            alt="Community gardening"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Grow Together</h2>
            <p className="text-xl mb-6 max-w-md">Join our community of passionate gardeners</p>
            <button className="btn btn-accent btn-lg">Join Now</button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <img
            src={img2}
            className="w-full h-full object-cover rounded-box"
            alt="Urban balcony garden"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Urban Gardening Made Simple</h2>
            <p className="text-xl mb-6 max-w-md">Small spaces? No problem!</p>
            <button className="btn btn-accent btn-lg">Learn Tips</button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative">
          <img
            src={img3}
            className="w-full h-full object-cover rounded-box"
            alt="Person planting seeds"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your Green Journey Starts Here</h2>
            <p className="text-xl mb-6 max-w-md">Beginner-friendly guides and resources</p>
            <button className="btn btn-accent btn-lg">Get Started</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;