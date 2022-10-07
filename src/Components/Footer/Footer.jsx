import React from "react";
import "./Footer.css";
import { ImLocation2 } from "react-icons/im";
import { HiPhoneMissedCall } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { AiFillClockCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer_mainnbg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Umar Farooq</h4>
            <div className="row justify-content-center">
              <div className="col-lg-6 ">
                <div className="bloc mt-3">Blockchain Developer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row  justify-content-center">
            <div className="col-lg-6 p-0">
              <ImLocation2 className="ms-3"></ImLocation2>
              <span className="text-white ms-3">
              Model Town Lahore, Lahore
              </span>
            </div>
          </div>
          <div className="row mt-2 justify-content-center">
            <div className="col-lg-6 p-0 marl ">
              <HiPhoneMissedCall className="ms-3"></HiPhoneMissedCall>
              <span className="text-white ms-3">+92 313 6005881 </span>
            </div>
          </div>
          <div className="row mt-2 justify-content-center">
            <div className="col-lg-6 p-0 ">
              <GrMail className="ms-3"></GrMail>
              <a target='_blank' type="email" className="text-white ms-3">umarfarooqmsc@gmail.com</a>
            </div>
          </div>
          <div className="row mt-2 justify-content-center">
            <div className="col-lg-6 p-0 ">
              <AiFillClockCircle className="ms-3"></AiFillClockCircle>
              <span className="text-white ms-3 marl2">6 AM - 10 PM</span>
            </div>
          </div>
          <div className="row mt-3 justify-content-center">
            <div className="col-lg-10">
              <p className="text-white">Copyright © 2022 All Rights Reserved by Better Logics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
