import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { skills } from "../assets/assets";
import { useState } from "react";

export default () => {

  const [data, setData] = useState(skills) 

  return (
    <section id="skills" className="w-full px-4 md:px-6 pt-20 lg:pt-52 flex">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl md:text-6xl text-center dark:text-white">What I Work With</h1>
        <p className="mt-3 dark:text-gray-600 text-gray-700 text-center text-sm md:text-lg">I specialize in building modern web applications using JavaScript, React, and related technologies.</p>
        <div className="max-w-6xl w-full flex items-center justify-center">
          <div className="w-full backdrop-blur-lg flex flex-col items-center justify-center">
            <Swiper
              effect='coverflow'
              grabCursor={true}
              centeredSlides={false}
              slidesPerView='auto'
              loop={true}
              loopAdditionalSlides={data.length}
              watchSlidesProgress={true}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true}}
              autoplay={{ delay: 2000, disableOnInteraction: false}} 
              modules={[EffectCoverflow, Pagination, Autoplay]}
              
              className="pt-5 w-full"
            > 
              {
                data.map((skill) => (
                  <SwiperSlide
                    key={skill.id}
                    className="!w-[200px] !h-[200px] sm:!w-[220px] sm:!h-[250px] md:!w-[250px] md:!h-[280px] flex flex-col items-center justify-center gap-3 backdrop-blur-md bg-white rounded-xl shadow-xl hover:scale-105 hover:bg-white/70 transition-all duration-1000"
                  >
                    <div className='w-full h-full flex flex-col items-center justify-center text-center gap-5 p-5'>
                      <img src={skill.img} className="w-[100px] h-[120px] object-contain mx-auto" alt={skill.title} />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>            
      </div>
    </section>




  );
};
