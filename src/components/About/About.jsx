import React from "react";
import about from "../../Assets/aboutus.png";
export default function About() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row aboutus">
          <p className="display-3 text-white fw-bold text-center">About us</p>
            <p className=" text-white fw-medium text-center">There is now an abundance of readable dummy texts.</p> 
          </div>
          <div className="row ">
            <p className="fs-1 fw-bold text-center py-5 px-5">
              Soundbox Card Enhanced battery life, more power to your business
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6">
              <div>
                <p className="fs-1 fw-medium">Increased Power Output</p>
                <p>
                  Boost your business efficiency with a more powerful soundbox,
                  delivering enhanced performance for diverse business needs.
                </p>
              </div>

              <div>
                <p className="fs-1 fw-medium">Increased Power Output</p>
                <p>
                  Boost your business efficiency with a more powerful soundbox,
                  delivering enhanced performance for diverse business needs.
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
