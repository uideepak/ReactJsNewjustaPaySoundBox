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
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="container">
          <div className="row align-items-center">
            <p className="display-3 fw-bold text-center ">Table Pod</p>
            <div className="col-md-6">
              <div className="box-wrap">
                <div className="box d-flex gap-3 py-5">
                  <div>
                    <FaArrowAltCircleRight size={30} />
                  </div>

                  <div>
                    <p>Increased Power Output</p>
                    <p>
                      Boost your business efficiency with a more powerful
                      soundbox, delivering enhanced performance for diverse
                      business needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="box-wrap">
                <div className="box d-flex gap-3  ">
                  <div>
                    <FaArrowAltCircleRight size={30} />
                  </div>

                  <div>
                    <p>Increased Power Output</p>
                    <p>
                      Boost your business efficiency with a more powerful
                      soundbox, delivering enhanced performance for diverse
                      business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={tablepod} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="container">
            <div className="row align-items-center">
              <p className="display-3 fw-bold text-center ">ID Card</p>
              <div className="col-md-6">
                <div className="box-wrap">
                  <div className="box d-flex gap-3 py-5">
                    <div>
                      <FaArrowAltCircleRight size={30} />
                    </div>

                    <div>
                      <p>Increased Power Output</p>
                      <p>
                        Boost your business efficiency with a more powerful
                        soundbox, delivering enhanced performance for diverse
                        business needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box-wrap">
                  <div className="box d-flex gap-3  ">
                    <div>
                      <FaArrowAltCircleRight size={30} />
                    </div>

                    <div>
                      <p>Increased Power Output</p>
                      <p>
                        Boost your business efficiency with a more powerful
                        soundbox, delivering enhanced performance for diverse
                        business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-center">
                  {" "}
                  <img src={idcard} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
