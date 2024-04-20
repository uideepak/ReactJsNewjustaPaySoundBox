import React from "react";
import herorightside from "../../Assets/hero-right.png";

export default function HeroBanner() {
  return (
    <>
      <section className="homebanner">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="display-1   text-white  fw-bold '">
                Ping for Pay Justapay Soundbox
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src={herorightside} alt="" className="w-100 "/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
