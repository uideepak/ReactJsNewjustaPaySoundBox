import React from "react";
import Affordable from "../../Assets/Icon_01.png";
import Flexibility from "../../Assets/Icon_02.png";
import Reliable from "../../Assets/Icon_03.png";
import EasySetup from "../../Assets/Icon_04.png";
import { MdOutlineDoubleArrow } from "react-icons/md";
import store from "../../Assets/store.png";

export default function SoundboxDetails() {
  return (
    <div>
      <div className="container">
        <div className="row text-center py-4">
          <p className="display-5 fw-bold">
            Payments Made Simple With JustaPay Soundbox
          </p>
        </div>

        <div className=" row rounded-3 ctm-bg">
          <div className="col-md-6">
            <div>
              <img src={store} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="box-wrap py-5">
              <div className="box d-flex  align-items-center gap-3 ">
                <div>
                  <MdOutlineDoubleArrow size={25} className="text-white" />
                </div>
                <span className="fs-3 fw-bold text-white">
                  JustaPay Soundbox
                </span>
              </div>
              <p className=" text-white ctm-text">
                JustaPay is a specialized payment platform designed specifically
                for Soundbox. Our goal is to provide a convenient, secure, and
                efficient way for soundbox users to receive successful payments.
              </p>
            </div>

            <div className="box-wrap py-5">
              <div className="box d-flex  align-items-center gap-3 ">
                <div>
                  <MdOutlineDoubleArrow size={25} className="text-white" />
                </div>
                <span className="fs-3 fw-bold text-white">
                  Business Solutions
                </span>
              </div>
              <p className="ctm-text text-white ">
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
                      <div className="col-md-5">
                        <img src={Affordable} alt="sfds" className="w-100" />
                      </div>
                      <div className=" col-md-7 text-muted fw-bold">
                        Affordable
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="shopping-wrap row align-items-center">
                      <div className="col-md-5">
                        <img src={Flexibility} alt="sfds" className="w-100" />
                      </div>
                      <div className=" col-md-7 text-muted fw-bold">
                        Flexibility
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="shopping-wrap row align-items-center">
                      <div className="col-md-5">
                        <img src={Reliable} alt="sfds" className="w-100" />
                      </div>
                      <div className=" col-md-7 text-muted fw-bold">
                        Reliable
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="shopping-wrap row align-items-center">
                      <div className="col-md-5">
                        <img src={EasySetup} alt="sfds" className="w-100" />
                      </div>
                      <div className=" col-md-7 text-muted fw-bold">
                        Easy Setup
                      </div>
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
