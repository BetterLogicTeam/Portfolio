import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import css from "../Assets/css.png"
import js from "../Assets/js.png"
import sol from "../Assets/sol.png"
import react from "../Assets/react.png"
import sola from "../Assets/sola.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Sslider.css";

import {
  CircularProgressbar,
  //   CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import hea from "../Assets/hea.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const percentage = 80;
const percentage1 = 85;
const percentage2 = 90;

function Sslider() {
  return (
    <div>



        <div className='asdfgh'>
      <Swiper
        spaceBetween={30}
        slidesPerView={"3 "}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face front">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">HTML</h6>
                    <img src={hea} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus 
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face dsdsds">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">CSS</h6>
                    <img src={css} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage1}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face fron">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">JS</h6>
                    <img src={js} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face fro">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">HTML</h6>
                    <img src={sol} className="heaa  asss" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face front">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">REACT</h6>
                    <img src={react} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face front">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">SOLANA</h6>
                    <img src={sola} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      </div>




      <div className="div123">
      <Swiper
        spaceBetween={30}
        slidesPerView={"1  "}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face front">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">HTML</h6>
                    <img src={hea} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face front">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">HTML</h6>
                    <img src={hea} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face front">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">HTML</h6>
                    <img src={hea} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face front">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">HTML</h6>
                    <img src={hea} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face front">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">HTML</h6>
                    <img src={hea} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="sssas">
            <div className="casa">
              <div className="face front">
                <div>
                  <div className="d-flex justify-content-around">
                    <h6 className="text-white ">HTML</h6>
                    <img src={hea} className="heaa" alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className="face back">
                <h2 className="flilp_h">Node.js</h2>
                <p className="flilp_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi quaerat, nesciunt corrupti accusantium itaque accusamus
                  beatae dolor natus necessitatibus a fuga sunt inventore.
                  Perferendis quam odit repudiandae, eius odio dicta?
                </p>
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
  );
}

export default Sslider;
