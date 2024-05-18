import React from "react";
import dyanmic from "../../Assets/dynamic-and-static-QR.png";
import longLasting from "../../Assets/long-lasting-battery.png";
import noPayment from "../../Assets/no-payment-frouds.png";
import portable from "../../Assets/portable-and-remote.png";
import securityCompliance from "../../Assets/security-compliance.png";
import volumeControl from "../../Assets/volume-control.png";

export default function FeatureCard() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row  text-center align-items-center">
            <div className="col-md-6 ">
              <div className="fs-1 fw-bold text-center ">
                <p className="mb-0">Features of the JustaPay</p>
                <span style={{ color: "#fe865a" }}> Soundbox</span>{" "}
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="card py-3 mb-3">
                <img src={dyanmic} alt="dyanmic" className="w-25 mx-auto " />
                <div className="card-body">
                  <h5 className="card-title">Dynamic & Static QR</h5>
                  <p className="card-text">
                    Have QR code allowing for flexible payment methods
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card py-3 mb-3 ">
                <img src={noPayment} alt="" className="w-25 mx-auto " />
                <div className="card-body">
                  <h5 className="card-title">No Payment Frauds</h5>
                  <p className="card-text">
                    prevent payment frauds, ensuring secure transactions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row  text-center py-3   align-items-center">
            <div className="col-md-3">
              <div className="card py-3 mb-3">
                <img src={longLasting} alt="" className="w-25 mx-auto " />
                <div className="card-body">
                  <h5 className="card-title"> Long-lasting battery</h5>
                  <p className="card-text ">
                    durable battery that offers extended usage time
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card py-3 mb-3">
                <img
                  src={securityCompliance}
                  alt=""
                  className="w-25 mx-auto "
                />
                <div className="card-body">
                  <h5 className="card-title">Security Compliance</h5>
                  <p className="card-text">
                    safeguard user information and transactions
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card py-3 mb-3">
                <img src={volumeControl} alt="" className="w-25 mx-auto " />
                <div className="card-body">
                  <h5 className="card-title">Volume Control</h5>
                  <p className="card-text">
                    Provides adjustable volume settings
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card py-3 mb-3">
                <img src={portable} alt="" className="w-25 mx-auto " />
                <div className="card-body">
                  <h5 className="card-title">Portable and Remote</h5>
                  <p className="card-text break-word">
                    Portable capabilities improves accessibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
