import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Animation.css'

function Animation() {
    useEffect(() => {
        Aos.init();
      }, [])
  return (
    <div>
        <section id="about" class="light">
        <div data-aos="fade-right"
            data-aos-duration="3000"> <header >
           <div className='Ex_h'> <p>About Us</p> </div>
            <p class="title">A software engineer Skilled at writing well-designed, testable and efficient code using Smart Contract - Solidity | Web3.JS | NFT | Open Marketplace | Metaverse | DEFI | DEX | DAO | Truffle | Hardhat</p>
        </header>
        </div>

        <div class="container">
            <div class="row table-row">
            
                

                <div data-aos="fade-right"
            data-aos-duration="3000">
                <div class="col-md-6">
                    <div class="section-content">
                        <div class="about-content left animated  visible">
                            <div class="about-icon"><i class="fa fa-code"></i></div>
                            <div class="about-detail">
                                <h4>Clean Code</h4>
                                <p>Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.</p>
                            </div>
                        </div>

                        <div class="about-content left animated fadeInLeft visible" >
                            <div class="about-icon"><i class="fa fa-desktop"></i></div>
                            <div class="about-detail">
                                <h4>Fully Responsive</h4>
                                <p>A fully responsive website will rescale itself to preserve the user experience and look and feel across all devices — with no irritating zooming, scrolling or resizing.</p>
                            </div>
                        </div>

                        <div class="about-content left animated fadeInLeft visible" >
                            <div class="about-icon"><i class="fa fa-cube"></i></div>
                            <div class="about-detail">
                                <h4>Security</h4>
                                <p>Blockchain technology's data structures have inherent security qualities because they are based on consensus, cryptography, and decentralization principles. Each new block of information connects to all the previous blocks in a way that it's nearly impossible to tamper with.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div class="col-md-6 ">
                {/* <div data-aos="fade-right"
            data-aos-duration="3000"> */}
                    <div class="section-content">
                        <img class="big-image" src='animation.gif'></img>
                    </div>
                    {/* </div> */}
                </div>
            </div> 
        </div>
    </section>
    </div>

  )
}

export default Animation

{/* <div data-aos="fade-right" */}
            // data-aos-duration="3000">