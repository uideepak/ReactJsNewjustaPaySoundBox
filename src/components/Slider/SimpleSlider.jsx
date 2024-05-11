import React from "react";
import tablepod from "../../Assets/card-tablepod.png";
import tablepodWitchDisplay from "../../Assets/sound-4.png";
import idCard from "../../Assets/sound-2.png";
import technicalspecification from "../../Assets/sonund-3.png";
export default function SimpleSlider() {
  return (
    <div className="my-3">
      <div className="container">
        <div className="row  ctm-slider">
          <div className="col-md-3 mb-5">
            <div
              className="card  rounded-4  py-5"
              style={{ Width: "330px", height: "350px" }}
            >
              <div className="d-flex justify-content-center">
                <img src={tablepod} alt="" className="w-100" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-center">
                  Table Pod
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3  col-sm mb-5 ">
            <div
              className="card  rounded-4  py-5"
              style={{ Width: "330px", height: "350px" }}
            >
              <div className="d-flex justify-content-center">
                <img src={tablepodWitchDisplay} alt="" className="w-100" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-center">
                  Table Pod with Display
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3  mb-5">
            <div
              className="card  rounded-4  py-5"
              style={{ Width: "330px", height: "350px" }}
            >
              <div className="d-flex justify-content-center">
                <img src={idCard} alt="" className="w-100" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-center">
                  Soundbox ID Card{" "}
                </h5>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-3  mb-5">
            <div
              className="card  rounded-4  py-5"
              style={{ Width: "330px", height: "350px" }}
            >
              <div className="d-flex justify-content-center">
                <img src={technicalspecification} alt="" className="w-100" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-center">
                  Table Pod With Detachable QR Plate{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
