import React from "react";
import "./Card_flip.css";

import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  //   CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import hea from "../Assets/hea.png"

// Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
// import RadialSeparators from "./RadialSeparators";

const percentage = 80;
const percentage1 = 85;
const percentage2 = 90;

function Card_flip() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-3">
            <div className="sssas">
              <div className="casa">
                <div className="face front">
                  <div>
                  <CircularProgressbar
                    value={percentage2}
                    text={`${percentage2}%`}
                    strokeWidth={5}
                  />
                  </div>
                </div>
                <div className="face back">
                  <h2 className="flilp_h text-dark">solidity</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi quaerat, nesciunt corrupti accusantium itaque
                    accusamus beatae dolor natus necessitatibus a fuga sunt
                    inventore. Perferendis quam odit repudiandae, eius odio
                    dicta?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-3">
            <div className="sssas">
              <div className="casa">
                <div className="face front">
                  <div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={5}
                  /></div>
                </div>
                <div className="face back">
                  <h2 className="flilp_h">JavaScript</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi quaerat, nesciunt corrupti accusantium itaque
                    accusamus beatae dolor natus necessitatibus a fuga sunt
                    inventore. Perferendis quam odit repudiandae, eius odio
                    dicta?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-3">
            <div className="sssas">
              <div className="casa">
                <div className="face front">
                 
                  <div>
                    <div className="d-flex justify-content-around">
                  <h6 className="text-white " >HTML</h6>
                 <img src={hea} className='heaa' alt="" />
                  </div>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage1}%`}
                    strokeWidth={5}
                  /></div>
                </div>
                <div className="face back">
                  <h2 className="flilp_h">Node.js</h2>
                  <p className="flilp_p">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi quaerat, nesciunt corrupti accusantium itaque
                    accusamus beatae dolor natus necessitatibus a fuga sunt
                    inventore. Perferendis quam odit repudiandae, eius odio
                    dicta?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_flip;
