import React from 'react'
import "./Contact.css"
import cont from "../Assets/cont.png"
import {GrMail} from 'react-icons/gr'
import {ImLocation2} from 'react-icons/im'
import {HiPhoneMissedCall} from 'react-icons/hi'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'

function Contact() {
  return (
    <div className='cont_main'>
        <div className="container">
            <div className="row justify-content-center align-content-center">
                <div className="col-lg-6">
                    <img src={cont} className='w-100' alt="" />
                </div>
                <div className="col-lg-6 casss py-3 mt-3">

                    <h3 className='text-white pb-4'>Looking for me <br />
                    Here you can find me </h3>
                <div className="row mt-2 justify-content-start">
            <div className="col-lg-6 py">
              <ImLocation2 className="ms-3 text-white"></ImLocation2>
              <span className="text-white ms-3">
                Link Road Lahore,Model Town
              </span>
            </div>
          </div>
                <div className="row mt-2 justify-content-start">
            <div className="col-lg-6 p-0 mmrr  ">
              <HiPhoneMissedCall className="ms-3 text-white"></HiPhoneMissedCall>
              <span className="text-white ms-3 ">+92 03054832816</span>
            </div>
          </div>
                <div className="row mt-2 justify-content-start">
            <div className="col-lg-6 p-0 ">
              <GrMail className="ms-3 text-white"></GrMail>
              <span className="text-white ms-3">alinawazish150p@gmail.com</span>
            </div>
          </div>
          <div className="row mt-2 justify-content-start">
            <div className="col-lg-6 p-0 mmrr  mt-3">
              <ImLinkedin className="ms-3 text-white"></ImLinkedin>
              <span className="text-white ms-3"><a className='text-white text-decoration-none' href="https://www.linkedin.com/in/umar-farooq-710068205/">My Linked in profile</a></span>
            </div>
          </div>
          <div className="row mt-2 justify-content-start">
            <div className="col-lg-6 p-0 mmrr mt-3">
              <BsGithub className="ms-3 text-white"></BsGithub>
              <span className="text-white ms-3"><a className='text-white text-decoration-none' href="https://www.linkedin.com/in/umar-farooq-710068205/">My GITHUB  profile</a></span>
            </div>
          </div>
                        
                    </div>
                </div>
            </div>
        </div>
      
    
  )
}

export default Contact
