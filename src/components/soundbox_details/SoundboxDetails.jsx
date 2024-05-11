import React from "react";
import soundbox from "../../Assets/sound-box-details.png";
import { BiSolidRightArrow } from "react-icons/bi";
import Affordable from "../../Assets/Icon_01.png";
import Flexibility from "../../Assets/Icon_02.png";
import Reliable from "../../Assets/Icon_03.png";
import EasySetup from "../../Assets/Icon_04.png";
import arrow from "../../Assets/Arrow.png";
export default function SoundboxDetails() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row text-center py-4">
          <p className="display-5 fw-bold">
            Payments Made Simple With JustaPay Soundbox
          </p>
        </div>

        <div className=" row rounded-3 ctm-bg">
          <div className="col-md-6">
            <div>
              <img src={soundbox} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="box-wrap py-5">
              <div className="box d-flex  align-items-center  gap-2 ">
                <div>
                  <img src={arrow} alt=""  className="w-100"/>
                </div>
                <span className="fs-3 fw-medium">JustaPay Soundbox</span>
              </div>
              <p className="mx-4 ">
                JustaPay is a specialized payment platform designed specifically
                for Soundbox. Our goal is to provide a convenient, secure, and
                efficient way for soundbox users to receive successful payments.
              </p>
            </div>

            <div className="box-wrap py-5">
              <div className="box d-flex  align-items-center  gap-2 ">
              <div>
                  <img src={arrow} alt=""  className="w-100"/>
                </div>
                <span className="fs-3 fw-medium">Business Solutions</span>
              </div>
              <p className="mx-4">
                From payment processing and invoicing to payroll management and
                beyond, JustaPay offers comprehensive payment solutions tailored
                to the unique needs of businesses of all sizes.
              </p>
            </div>

            <div className="shoping-outer">
              <div className="shoping-inner rounded-4 bg-white p-3">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="shopping-wrap row align-items-center">
                      <div className="col-md-6">
                        <img src={Affordable} alt="sfds" className="w-100" />
                      </div>
                      <div className=" col-md-6 text-muted">Affordable</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="shopping-wrap row align-items-center">
                      <div className="col-md-6">
                        <img src={Flexibility} alt="sfds" className="w-100" />
                      </div>
                      <div className=" col-md-6 text-muted">Flexibility</div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="shopping-wrap row align-items-center">
                      <div className="col-md-6">
                        <img src={Reliable} alt="sfds" className="w-100" />
                      </div>
                      <div className=" col-md-6 text-muted">Reliable</div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="shopping-wrap row align-items-center">
                      <div className="col-md-6">
                        <img src={EasySetup} alt="sfds" className="w-100" />
                      </div>
                      <div className=" col-md-6 text-muted ">EasySetup</div>
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
