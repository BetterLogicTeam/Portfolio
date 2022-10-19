import React from "react";
import "./Footer.css";
import { ImLocation2 } from "react-icons/im";
import { HiPhoneMissedCall } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { AiFillClockCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";



function Footer() {
  return (
    // <div className="footer_mainnbg">
    //   <div className="container">
    //     <div className="row justify-content-center">
    //       <div className="col-lg-6">
    //         <h4>Umar Farooq</h4>
    //         <div className="row justify-content-center">
    //           <div className="col-lg-6 ">
    //             <div className="bloc mt-3">Blockchain Developer</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="container-fluid">
    //       <div className="row  justify-content-center">
    //         <div className="col-lg-6 p-0">
    //           <ImLocation2 className="ms-3"></ImLocation2>
    //           <span className="text-white ms-3">
    //           Model Town Lahore, Lahore
    //           </span>
    //         </div>
    //       </div>
    //       <div className="row mt-2 justify-content-center">
    //         <div className="col-lg-6 p-0 marl ">
    //           <HiPhoneMissedCall className="ms-3"></HiPhoneMissedCall>
    //           <span className="text-white ms-3">+92 313 6005881 </span>
    //         </div>
    //       </div>
    //       <div className="row mt-2 justify-content-center">
    //         <div className="col-lg-6 p-0 ">
    //           <GrMail className="ms-3"></GrMail>
    //           <a target='_blank' type="email" className="text-white ms-3">umarfarooqmsc@gmail.com</a>
    //         </div>
    //       </div>
    //       <div className="row mt-2 justify-content-center">
    //         <div className="col-lg-6 p-0 ">
    //           <TiSocialLinkedinCircular className="ms-3 fs-4"><a href="https://www.linkedin.com/in/umar-farooq-710068205/" target='_blank'></a></TiSocialLinkedinCircular>
    //           <span className="text-white ms-3 marl2">6 AM - 10 PM</span>
    //         </div>
    //       </div>
    //       <div className="row mt-3 justify-content-center">
    //         <div className="col-lg-10">
    //           <p className="text-white">Copyright © 2022 All Rights Reserved by Better Logics</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <>

<div className="footer_main">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer_emg">
                <img src="logo.png" alt="" className="max-h-7 mb-4" />
              </div>
              <div className="footer_p">
                <h4 className="text-white">Umar Farooq</h4>
                <p>
                 I make all kind of sites according to your requirements.Its my hounour to do work for you.
                </p>
              </div>
              <div className="footer_icon space-x-5">
                <a href="https://www.linkedin.com/in/umar-farooq-710068205/" target="_blank" className="social fs-3">
                  <BsLinkedin></BsLinkedin>
                </a>
                <a href="https://web.facebook.com/profile.php?id=100009498919711" target="_blank" className="social fs-3">
                  <BsFacebook></BsFacebook>
                </a>
                <a href="https://twitter.com/UmarFar52299665" target="_blank" className="social fs-3">
                  <IoLogoTwitter></IoLogoTwitter>
                </a>
                {/* <a href="" className="social">
                  <BsInstagram></BsInstagram>
                </a> */}
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h6 className="text-white use"></h6>
              <ul className="footer_list">
              
              <div className="d-flex umr">
              <GrMail className="me-3"></GrMail>
                  <li className="llii">umarfarooqmsc@gmail.com</li>
              </div>
          
            
              <div className="d-flex umr">
              <HiPhoneMissedCall className="me-3"></HiPhoneMissedCall>
                  <li className="llii">+92 313 6005881</li>
                  </div>

                  <div className="d-flex umr">
              <ImLocation2 className="me-3"></ImLocation2>
                  <li className="llii text-white">Model Town Lahore, Lahore</li>
                  </div>
          
            
                
          
              </ul>
            </div>
          </div>




          <div class="flex flex-col items-center grey justify-between space-y-2 py-8 mt-5 sm:flex-row sm:space-y-0">
            <span class="dark:text-jacarta-400 text-sm">
              {/* ©<script>document.write(new Date().getFullYear())</script>2022 */}
              <a href="" class="hover:text-accent reserved">
              Copyright © 2022 All Rights Reserved by Better Logics
              </a>
            </span>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
