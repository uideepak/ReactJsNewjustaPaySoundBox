import React from "react";
import { FaChargingStation } from "react-icons/fa";

export default function FeatureCard() {
  return (
    <>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="display-2 fw-bold">
                <p>Justapay Sound </p>
                <p>Box Features</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3" >
                <FaChargingStation
                  size={100}
                  className="mx-auto bg-danger rounded-circle  p-1"
                />
                <div className="card-body">
                  <h5 className="card-title">10 Days battery backup</h5>
                  <p className="card-text">
                    Keeps going for 10 days without needing a recharge.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card  p-3" >
                <FaChargingStation
                  size={100}
                  className="mx-auto bg-danger rounded-circle  p-1"
                />
                <div className="card-body">
                  <h5 className="card-title">10 Days battery backup</h5>
                  <p className="card-text">
                    Keeps going for 10 days without needing a recharge.
                  </p>
                </div>
              </div>
            </div>

            <div className="row py-3">
              <div className="col-md-3">
                <div className="card p-3">
                  <FaChargingStation
                    size={100}
                    className="mx-auto bg-danger rounded-circle  p-1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">10 Days battery backup</h5>
                    <p className="card-text">
                      Keeps going for 10 days without needing a recharge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card p-3 ">
                  <FaChargingStation
                    size={100}
                    className="mx-auto bg-danger rounded-circle  p-1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">10 Days battery backup</h5>
                    <p className="card-text">
                      Keeps going for 10 days without needing a recharge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card p-3">
                  <FaChargingStation
                    size={100}
                    className="mx-auto bg-danger rounded-circle  p-1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">10 Days battery backup</h5>
                    <p className="card-text">
                      Keeps going for 10 days without needing a recharge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card p-3">
                  <FaChargingStation
                    size={100}
                    className="mx-auto bg-danger rounded-circle  p-1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">10 Days battery backup</h5>
                    <p className="card-text">
                      Keeps going for 10 days without needing a recharge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
