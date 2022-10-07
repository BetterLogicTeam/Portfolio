import React from "react";
import "./Progress.css"

function Progress() {
  return (
    <div>
   <div className="section">
    <div className="conntt">
        <div className="caard">
        <h2 className="text-center text-white fw-bold pt-2 ">HTML</h2>
            <div className="boox">
                
                <div className="percent ">
                    <svg className="sssss">
                        <circle cx={70} cy={70} r={70}></circle>
                        <circle cx={70} cy={70} r={70}></circle>
                    </svg>
                    <div className="number">
                        <h2>90 <span>%</span></h2>  
                      </div>
                </div>
            </div>

        </div>

    </div>
   </div>
    </div>
  );
}

export default Progress;
