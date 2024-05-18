import React from "react";
import tablepod from "../../Assets/card-tablepod.png";
import tablepodWitchDisplay from "../../Assets/New folder/display-soundbox.png";
import idCard from "../../Assets/New folder/idcardsoundbox.png";
import technicalspecification from "../../Assets/New folder/Detachable_QR.png";
export default function SimpleSlider() {
  return (
    <section className="py-3 card-slider">
      <div className="container-fluid">
        <div className="row  ctm-slider">
          <div className="row">
            <p className="fs-1 text-white text-center fw-medium ">
              Manage Your Business Better with JustaPay Soundbox
            </p>
          </div>
          <div className="row mx-auto">
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="card  rounded-4  p-5 ctm-card  w-100 ">
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
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="card  rounded-4 p-5 ctm-card">
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
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="card  rounded-4  p-5 ctm-card  w-100 ">
                <div className="d-flex justify-content-center">
                  <img src={idCard} alt="" className="w-100" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-center">
                    Soundbox ID Card
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="card  rounded-4  p-5 ctm-card  w-100">
                <div className="d-flex justify-content-center">
                  <img src={technicalspecification} alt="" className="w-100" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-center">
                    Table Pod With Detachable QR Plate
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="button" class="btn ctm-button btn-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
