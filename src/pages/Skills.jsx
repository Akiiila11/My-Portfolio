import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { skills } from "../assets/assets";


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay} from 'swiper/modules';

const Skills = () => {

  const [data, setData] = useState(skills) 

  return (
    <section id="skills" className="w-full px-4 md:px-6 pt-20 lg:pt-38 flex flex-col items-center justify-center">
      <div className="w-full">
        <h1 className="font-bold text-3xl md:text-6xl text-center dark:text-white">What I Work With</h1>
        <p className="mt-3 dark:text-gray-600 text-gray-700 text-center text-sm md:text-lg">Here are the technologies i work with to build web applications.</p>
      </div>
      <div className="max-w-3xl w-full flex items-center justify-center">
        <Swiper 
        modules={[EffectCoverflow, Pagination, Autoplay]} 
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        centeredSlides={true}
        breakpoints={{
          375: { slidesPerView: 1 },
          430: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1199: { slidesPerView: 3 },
        }}  
        loop= {true}
        autoplay={{
          duration: 1500 
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        
        className="mySwiper py-10"
        >
          {
            data.map((skill) => (
              <SwiperSlide
                key={skill.id}
                className="w-full h-full my-14 p-6 flex flex-col items-center justify-center gap-3 backdrop-blur-md bg-white rounded-xl shadow-xl hover:scale-105 hover:bg-white/70 transition-all duration-1000"
              >
                <div className='w-full h-full flex flex-col items-center justify-center text-center gap-5 p-5'>
                  <img src={skill.img} className="w-[100px] h-[120px] object-contain mx-auto" alt={skill.title} />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
