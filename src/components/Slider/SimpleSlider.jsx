import React from "react";
import Slider from "react-slick";
import idcard from "../../Assets/idcard.png";
import tablepod from "../../Assets/tablepod.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
  <section className="px-5 ctm-slider py-5 my-5">


    
<Slider {...settings}>
      <div>
        <div className="card text-center" style={{ width: "238px" }}>
          <img src={tablepod} alt="" />
          <div className="card-body">
            <h5 className="card-title text-center text-center">Card title</h5>
            
            <a href="#" className="btn btn-primary text-center text-center">
              Go somewhere
            </a>
          </div>
        </div>{" "}
      </div>

      <div>
        <div className="card text-center" style={{ width: "238px" }} >
          <img src={tablepod} alt="" />
          <div className="card-body">
            <h5 className="card-title text-center">Card title</h5>
            
            <a href="#" className="btn btn-primary text-center text-center">
              Go somewhere
            </a>
          </div>
        </div>{" "}
      </div>



      <div>
        <div className="card text-center" style={{ width: "238px" }}>
          <img src={tablepod} alt="" />
          <div className="card-body">
            <h5 className="card-title text-center">Card title</h5>
           
            <a href="#" className="btn btn-primary text-center text-center">
              Go somewhere
            </a>
          </div>
        </div>{" "}
      </div>
      <div>
        <div>
          <div className="card text-center" style={{ width: "238px" }}>
            <img src={tablepod} alt="" />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              
              <a href="#" className="btn btn-primary text-center text-center">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  </section>

  );
}
