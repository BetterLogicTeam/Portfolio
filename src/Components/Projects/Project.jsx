import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Project.css";
import p from "../Assets/p.png"
import p1 from "../Assets/p1.png"
import p2 from "../Assets/p2.png"
import p3 from "../Assets/p3.png"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


function Project() {
  return (
    <div>
        <div className="container project_main">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2 className=" Ex_h">Our Project</h2>
                </div>
            </div>

        </div>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={p} className='img' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p1} className='img' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p2} className='img' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p3} className='img' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p} className='img' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p1} className='img' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p3} className='img' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={p2} className='img' />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
      
    </div>
  )
}

export default Project
