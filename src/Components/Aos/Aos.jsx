import React from 'react'
import p from "../Assets/p.png"
import p1 from "../Assets/p1.png"
import p2 from "../Assets/p2.png"
import "./Aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation  , Autoplay} from "swiper";

function Aos() {
  return (
    <div className='aos_main'>
        <div data-aos="fade-right" data-aos-duration="3000" >
        <h3 className='py-3 text-dark Ex_h clints_ha res_sm'   >Projects</h3>
        </div>  

        <div class="container code_pen">
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_1.jpeg"/>
                    {/* <h3>Design</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://compassionate-pare-c6563e.netlify.app/" target='blank'>Click me</a></button>

                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_2.jpeg"/>
                    {/* <h3>Code</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://stunning-halva-e6690b.netlify.app/" target='blank'>Click me</a></button>

                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_3.jpeg"/>
                    {/* <h3>Launch</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://zealous-albattani-f42826.netlify.app/" target='blank'>Click me</a></button>

                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_4.jpeg"/>
                    {/* <h3>Launch</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://nftxpress.club/" target='blank'>Click me</a></button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_5.jpeg"/>
                    {/* <h3>Launch</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://app.wireswap.io/#/" target='blank'>Click me</a></button>

                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_6.jpeg"/>
                    {/* <h3>Launch</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://tiny-kitten-1f2397.netlify.app/" target='blank'>Click me</a></button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_7.jpeg"/>
                    {/* <h3>Launch</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://subtle-entremet-5903a0.netlify.app/" target='blank'>Click me</a></button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_8.jpeg"/>
                    {/* <h3>Launch</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://gentle-medovik-899856.netlify.app/" target='blank'>Click me</a></button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_9.jpeg"/>
                    {/* <h3>Launch</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://magenta-moonbeam-01d84b.netlify.app/" target='blank'>Click me</a></button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_10.jpeg"/>
                    {/* <h3>Launch</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://fervent-mirzakhani-4407f6.netlify.app/" target='blank'>Click me</a></button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="p_11.jpeg"/>
                    {/* <h3>Launch</h3> */}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                    <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://drip.community/" target='blank'>Click me</a></button>
                </div>
            </div>
        </div>
        </SwiperSlide>
        </Swiper>
    </div>

        <div className="container">
          {/* <div className="row justify-content-center mt-4">
            <div className="col-lg-4 mt-4">
              <img src={p} alt="" className='w-100' height='250px'
  data-aos="zoom-in-up"
     data-aos-duration="3000" />
            </div>
            <div className="col-lg-4 mt-4">
              <img src={p1} alt="" className='w-100' height='250px'
  data-aos="zoom-in-up"
     data-aos-duration="3000" />
            </div>
            <div className="col-lg-4 mt-4">
              <img src={p2} alt="" className='w-100'  height='250px'
  data-aos="zoom-in-up"
     data-aos-duration="3000" />
            </div>  
          
            </div>     */}

            
    {/* <Swiper
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={p} alt="feed back of my clint" className='img_ss' /></SwiperSlide>
        <SwiperSlide><img src={p1} alt="feed back of my clint" className='img_ss' /></SwiperSlide>
        <SwiperSlide><img src={p2} alt="feed back of my clint" className='img_ss' /></SwiperSlide>
        <SwiperSlide><img src={p} alt="feed back of my clint" className='img_ss' /></SwiperSlide>
        <SwiperSlide><img src={p1} alt="feed back of my clint" className='img_ss' /></SwiperSlide>
        <SwiperSlide><img src={p2} alt="feed back of my clint" className='img_ss' /></SwiperSlide>
       
      </Swiper> */}
    </div>
    </div>
  )
}

export default Aos
