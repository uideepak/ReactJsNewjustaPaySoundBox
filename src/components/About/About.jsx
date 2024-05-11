import React from "react";
import about from "../../Assets/aboutus.png";
export default function About() {
  return (
    <div>
      <section className="">
        <div className="container">
          <div className="row aboutus">
            <p className="display-3 text-white fw-bold text-center">About us</p>
            <p className=" text-white fw-medium text-center">
              Join The Revolution In Digital Payments With JustaPay
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5 ">
        <div className="container about-bg">
          <div className="row  ">
      
            <p className="fs-1 fw-bold text-center py-5 px-5">
              Experience the Ease, Security, and Convenience of our Payment
              Soundbox
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div>
                <p className="fs-3 fw-medium">Top Soundbox System</p>
                <p className="text-muted">
                  At JustaPay, we understand the challenges that come with
                  traditional payment methods, which is why we've developed an
                  innovative payment soundbox that revolutionizes the way
                  transactions are made.
                </p>
              </div>

              <div>
                <p className="fs-3 fw-medium">Instant Payment Alerts</p>
                <p className="text-muted">
                  Easily integrates with existing website infrastructure and
                  payment systems and users can select from a range of sound
                  effects to accompany different payment events such as
                  successful transactions, declined payments, or pending
                  transactions
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src={about} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
