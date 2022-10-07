import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import p from "../Assets/p.png"
import p2 from "../Assets/p2.png"
import p1 from "../Assets/p1.png"
import p3 from "../Assets/p3.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

function Slider() {
  return (
    <div className="main_sslider">
         <div  data-aos="fade-up">
        <h3 className='Ex_h py-3 text-dark'   >My Recent projects</h3>
            </div>
            {/* <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <img src={p} className='w-100'  alt="" />
                </div>
              </div>
            </div> */}







{/*         
        <div className="sss">
     
          

      
          <div className="py-3">
       <Swiper
        slidesPerView={"3  "}
        loop={true}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={p} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p1} alt="" /></SwiperSlide>
      </Swiper>
      </div>
      
    
      
      </div>
<div className="ss9">
<h3 className='Ex_h py-3 sm_ex_h' >My Recent projects</h3>
<div className="py-3">


<Swiper
        slidesPerView={"1 "}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={p} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={p1} alt="" /></SwiperSlide>
      </Swiper>
      </div>
</div> */}
    </div>




    
  )
}

export default Slider
