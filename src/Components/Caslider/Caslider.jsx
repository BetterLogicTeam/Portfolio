import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Caslider.css"

// import required modules
import { Pagination,Autoplay } from "swiper";

function Caslider() {
  return (
    <div className="Cslider_main_bg">
        <div className="sliiider  container">
            
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1000,
            // autoplayDisableOnInteraction:true,
            pauseOnMouseEnter: true,
          }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <div className="caaaard bor">
          <div className="perrrcen">
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="nu8">
              <h4>
                85 <span>%</span>
              </h4>
              <p>Node js</p>
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>  <div className="caaaard bor1 cassa">
          <div className="perrr">
            <div className="zaaa"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="nu8">
              <h4>
                82 <span>%</span>
              </h4>
              <p>Javasrcipt</p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="caaaard bor2">
          <div className="perrrc">
            <div className="zaa"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="nu8">
              <h4>
                90 <span>%</span>
              </h4>
              <p>Solidity</p>
            </div>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>      <div className="caaaard bor3">
          <div className="perrrce qw" >
            <div className=" za "></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="nu8">
              <h4>
                80 <span>%</span>
              </h4>
              <p>HTML</p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>  <div className="caaaard bor4 cassa">
          <div className="perrr">
            <div className="zaaa"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="nu8">
              <h4>
                82 <span>%</span>
              </h4>
              <p>Mongo db</p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>  <div className="caaaard bor5 cassa">
          <div className="perrr">
            <div className="zaaa"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="nu8">
              <h4>
                82 <span>%</span>
              </h4>
              <p>Typescript</p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        </div>
      
    </div>
  )
}

export default Caslider
