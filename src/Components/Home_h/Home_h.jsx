import React from 'react'
import './Home_h.css';
import './Home';
import { FaAngleDown } from "react-icons/fa";
import Typewriter from 'typewriter-effect';




function Home_h() {
  
  return (

    <div>
    
    <div class="container-fluid splash" id="splash">
    
  <div class="container cntn">
  <div data-aos="fade-right"
            data-aos-duration="3000">
    <img src="umar_pic.jpg" alt="Portrait of Mr. Roboto" class="profile-image"/> 
    </div>
    {/* <h1>HELLO!</h1> 
    <h4 className='pp'>I,am Umar Farooq.</h4> */}
    {/* <p className='ppp2 mt-2'>I am a blockchain developer. I make all kind of blockchain sities.</p> */}
    <div className="type_writer fs-5 mt-1">
    <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('I am a blockchain developer. I make all kind of blockchain sites.')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      // .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start(true);
  }}
/>
</div>
    {/* <p className='ppp2'>I have 5+ years of experience in this field of Blockchain, web development and NodeJS. </p> */}


    
  </div>
  <div className="container">
         <div className="row justify-content-center">
           <div className="col-lg-4">
           <div data-aos="fade-right"
            data-aos-duration="3000">
           <button className='btn btn-outline-secondary w-100 hire text-white fw-bold home_btn'><a href="https://wa.me/923136005881?text=" target='blank'>Hire me</a></button>
           </div>
           </div>
           {/* <div className="col-lg-2">
           <button className='btn btn-outline-secondary w-100  text-white fw-bold home_btn'>Download CV</button>
           </div> */}
         </div>
        </div>
        <span class="continue"><a href="#about"><FaAngleDown className='fa fa'></FaAngleDown></a></span>
</div>
        

    </div>
  )
}

export default Home_h 
