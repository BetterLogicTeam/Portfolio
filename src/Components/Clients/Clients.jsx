import React from 'react'
import './Clients.css'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import feedr from "../Assets/feedr.png"
import feedr1 from "../Assets/feedr1.png"
import feedr2 from "../Assets/feedr2.png"



// import required modules
import { Pagination, Navigation  , Autoplay} from "swiper";


function Clients() {
  return (
    <div className='clients_mian'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h4 className=' clints_ha' data-aos="fade-right"
                     data-aos-duration="3000" >  Clients</h4>

                </div>

            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div data-aos="fade-right"
            data-aos-duration="3000"> <h4 className=' fs-3 py-3'>  Here is what my clients have said about my work</h4> </div> 
                </div>
            </div>
        </div>



<div className="container">
  {/* <div className="row justify-content-center">
    <div className="col-lg-8"> */}

   
 

    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          // autoplayDisableOnInteraction:true,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper client_swipar"
      >
        <SwiperSlide><img src="cl_1.jpeg" alt="feed back of my clint" className='img_ss' /></SwiperSlide>
        <SwiperSlide><img src="cl_2.jpeg" alt="feed back of my clint" className='img_ss' /></SwiperSlide>
        <SwiperSlide><img src="cl_3.jpeg" alt="feed back of my clint" className='img_ss' /></SwiperSlide>
        <SwiperSlide><img src="cl_4.jpeg" alt="feed back of my clint" className='img_ss' /></SwiperSlide>
        <SwiperSlide><img src="cl_5.jpeg" alt="feed back of my clint" className='img_ss' /></SwiperSlide>
        <SwiperSlide><img src="cl_6.jpeg" alt="feed back of my clint" className='img_ss' /></SwiperSlide>
       
      </Swiper>
    {/* </div>
    </div> */}
  </div>
 





      

       
    </div>
  )
}

export default Clients
