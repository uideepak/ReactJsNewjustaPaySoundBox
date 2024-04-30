import React from "react";
import soundbox from "../../Assets/sound-box-details.png";
import { BiSolidRightArrow } from "react-icons/bi";
import { PiShoppingCartBold } from "react-icons/pi";

export default function SoundboxDetails() {
  return (
    <div>
      <div className="container">
        <div className="row text-center py-4">
          <p className="display-5 fw-bold">
            Soundbox Card Enhanced battery life,
          </p>
          <p className="display-5 fw-bold"> More Power To Your Business</p>
        </div>

        <div
          className=" row  p-4 rounded-3"
          style={{ backgroundColor: "#67D5F1" }}
        >
          <div className="col-md-6">
            <div>
              <img src={soundbox} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="box-wrap py-5">
              <div className="box d-flex  align-items-center  gap-2 ">
                <div>
                  <BiSolidRightArrow size={20} color="white" />
                </div>
                <span className="fs-3 fw-medium">Increased Power Output</span>
              </div>
              <p>
                Boost your business efficiency with a more powerful soundbox,
                delivering enhanced performance for diverse business needs.
              </p>
            </div>

            <div className="box-wrap py-5">
              <div className="box d-flex  align-items-center  gap-2 ">
                <div>
                  <BiSolidRightArrow size={20} color="white" />
                </div>
                <span className="fs-3 fw-medium">Increased Power Output</span>
              </div>
              <p>
                Boost your business efficiency with a more powerful soundbox,
                delivering enhanced performance for diverse business needs.
              </p>
            </div>

            <div className="  shoping-outer">
              <div className="shoping-inner  rounded-4 bg-white p-4  d-flex gap-4">
                <div className="shopping-wrap d-flex gap-3">
                  <div>
                    <PiShoppingCartBold
                      size={40}
                      style={{ backgroundColor: "red " }}
                      className="rounded-5 "
                    />
                  </div>
                  <div>
                  <div className="fw-bold"> 320+</div>
                    <div className="text-muted">Retail stores</div>
                  </div>
                   
                </div>

                <div className="shopping-wrap d-flex gap-3">
                  <div>
                    <PiShoppingCartBold
                      size={40}
                      style={{ backgroundColor: "red " }}
                      className="rounded-5 "
                    />
                  </div>
                  <div>
                  <div className="fw-bold"> 320+</div>
                    <div className="text-muted">Retail stores</div>
                  </div>
                   
                </div>

                <div className="shopping-wrap d-flex gap-3">
                  <div>
                    <PiShoppingCartBold
                      size={40}
                      style={{ backgroundColor: "red " }}
                      className="rounded-5 "
                    />
                  </div>
                  <div>
                  <div className="fw-bold"> 320+</div>
                    <div className="text-muted">Retail stores</div>
                  </div>
                   
                </div>


                <div className="shopping-wrap d-flex gap-3">
                  <div>
                    <PiShoppingCartBold
                      size={40}
                      style={{ backgroundColor: "red " }}
                      className="rounded-5 "
                    />
                  </div>
                  <div>
                  <div className="fw-bold"> 320+</div>
                    <div className="text-muted">Retail stores</div>
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
