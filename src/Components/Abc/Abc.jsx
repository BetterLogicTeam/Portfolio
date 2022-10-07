import React from 'react'
import hea from "../Assets/hea.png"
import "./Abc.css"

function Abc() {
  return (
    <div className='abc_main' >
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-4 mt-3">
        <div className="card cccc">
            <div className="card-body">
<div className="row"> 
<div className="col-lg-6">
<h3>Soloidity</h3>


    </div>
    <div className="col-lg-3">
<img src={hea} className='card_img' alt="" />
</div>
    </div>
    <div className="row justify-content-center mt-5">
    <p>I have 3 years Experince in this language</p>
            <div className="row justify-content-center">
                <div className='EXX '> <span className='s'> 90% </span></div>
            </div>
        </div>
            </div>
        </div>
        </div>
       
        <div className="col-lg-4 mt-3">
        <div className="card cccc">
            <div className="card-body">
<div className="row"> 
<div className="col-lg-6">
<h3>Node.js</h3>

    </div>
    <div className="col-lg-3">
<img src={hea} className='card_img' alt="" />
</div>
    </div>
    <div className="row justify-content-center mt-5">
    <p>I have 2.5 years Experince in this language</p>
            <div className=" row justify-content-center ">

                <div className='EXX'>80%</div>
            </div>
        </div>
            </div>
        </div>
        </div>
        <div className="col-lg-4 mt-3">
        <div className="card cccc">
            <div className="card-body">
<div className="row"> 
<div className="col-lg-6">
<h3>Js</h3>

    </div>
    <div className="col-lg-3">
<img src={hea} className='card_img' alt="" />
</div>
    </div>
    <div className="row justify-content-center mt-5">
    <p>I have 4 years Experince in this language</p>
            <div className="row justify-content-center ">
                <div className='EXX'>90%</div>
            </div>
        </div>
            </div>
        </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Abc
