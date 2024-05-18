import React from "react";
import herorightside from "../../Assets/hero-right.png";
import SbIcon from "../../Assets/under_line.png";
export default function HeroBanner() {
  return (
    <>
      <section className="homebanner">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-md-6">
              <div className="display-1 text-white fw-bold hero-text'">
              Power of Payments with JustaPay 
               
                <div className="hero-content ">
                <p className="" style={{ color: "#F16532" }}>
                Soundbox                </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-end">
                <img src={herorightside} alt="" className="w-100 " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
