import React from "react";

import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
//   CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "../Card_flip/ChangingProgressProvider";

// Radial separators
// import RadialSeparators from "./RadialSeparators";

const percentage = 80;
const percentage1 = 85;
const percentage2 = 90;

function Booxes() {
  return (
    <div>
      <div className="container-fluid boooxbg">
        <div className="row">
          <div className="col-lg-4">
          
            <div className="section">
              <div className="conntt">
                <div className="caard">
                 <h2 className="hgfjs">HTML</h2>
                  <div className="boox">
                    <div className="percent">
              {/* <svg>
                        <circle cx={70} cy={70} r={70}></circle>
                        <circle cx={70} cy={70} r={70}></circle>
                    //   </svg> */}
                    {/* //   <div className="number">
                    //     <h2>
                    //       90 <span>%</span>
                    //     </h2>
                    //   </div> */}
        <CircularProgressbar
        value={percentage2}
        text={`${percentage2}%`}
        strokeWidth={5}
      />
                    </div>
                  </div>
                </div>
                 
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="section">
              <div className="conntt">
                <div className="caard">
                  <h2 className="text-center text-white fw-bold pt-2 ">HTML</h2>
                  <div className="boox">
                    <div className="percent">
                    <CircularProgressbar
        value={percentage1}
        text={`${percentage1}%`}
        strokeWidth={5}
      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="section">
              <div className="conntt">
                <div className="caard">
                  <h2 className="text-center text-white fw-bold pt-2  ">HTML</h2>
                  <div className="boox">
                    <div className="percent">
                    {/* <ChangingProgressProvider values={[0, 20, 40, 60, 80, 85]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 0.15
            })}
          />
        )}
      </ChangingProgressProvider> */}
        <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}
      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booxes;
