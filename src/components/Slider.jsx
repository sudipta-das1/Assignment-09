import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import i1 from '../assets/home-1.webp'
import i2 from '../assets/home-2.jpg'
import i3 from '../assets/home-3.jpg'

const Slider = () => {
  return (
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='w-full h-[600px] object-cover' src={i1} alt=""/></SwiperSlide>
        <SwiperSlide><img className='w-full h-[600px] object-cover'src={i2} alt=""/></SwiperSlide>
        <SwiperSlide><img className='w-full h-[600px] object-cover'src={i3} alt=""/></SwiperSlide>
         </Swiper>
    </div>
  );
};

export default Slider;