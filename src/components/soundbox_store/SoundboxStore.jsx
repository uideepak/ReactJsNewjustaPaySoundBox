import React from "react";
import shop from "../../Assets/1.png";
import petrol from "../../Assets/2.png"
import street from "../../Assets/3.png"
import Supermarkets from "../../Assets/4.png"
import Entertainment from "../../Assets/5.png"
import Restaurants from "../../Assets/6.png"
import video from '../../Assets/qr.mp4'; // Ensure you have the correct path

export default function SoundboxStore() {
  return (
    <div>
      <section className="pt-5 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 ">
              <p className="fs-1 fw-bold ">
                Amplify Your Payment Experience Everywhere
              </p>

              {/* <div className="card-box-wrap d-flex gap-3">
                <div className="bg-white border p-3">
                  <MdDeliveryDining size={50} />
                  <span>Retail Stores </span>
                </div>
                <div className="bg-white border p-3">
                  <MdDeliveryDining size={50} />
                  <span>Petrol Stations </span>
                </div>

                <div className="bg-white border p-3">
                  <MdDeliveryDining size={50} />
                  <span>Street Vendors</span>
                </div>
              </div> */}

              <div className="row align-items-center ctm-shop pt-3">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="row align-items-center ">
                      <div className="col-md-4 ">
                        <img src={shop} alt="sfds" className="w-100" />
                        <div>

                        </div>
                      </div>
                      <div className="col-md-8">
                        <span>Retail Stores</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <img src={petrol} alt="sfds" className="w-100" />
                      </div>
                      <div className="col-md-8">
                        <span>Petrol Stations 
</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <img src={street} alt="sfds" className="w-100" />
                      </div>
                      <div className="col-md-8">
                        <span>Street Vendors</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row py-5 align-items-center ctm-shop">
                <div className="row align-items-center ">
                  <div className="col-md-4">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <img src={Supermarkets} alt="sfds" className="w-100" />
                      </div>
                      <div className="col-md-8">
                        <span>Supermarkets</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <img src={Entertainment} alt="sfds" className="w-100" />
                      </div>
                      <div className="col-md-8">
                        <span>Entertainment</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <img src={Restaurants} alt="sfds" className="w-100" />
                      </div>
                      <div className="col-md-8">
                        <span>Restaurants</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div>
                <video  className="w-100" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
