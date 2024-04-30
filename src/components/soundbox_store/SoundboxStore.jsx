import React from "react";
import store from "../../Assets/store.png";
import { MdDeliveryDining } from "react-icons/md";

export default function SoundboxStore() {
  return (
    <div>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 ">
              <p className="display-3 fw-bold ">
                Perfect point of sale soundBox for many retail stores
              </p> 

             <div className="card-box-wrap d-flex gap-3">
             <div className="bg-white border p-3">
                <MdDeliveryDining size={50} />
                <span>Food Delivery</span>
              </div>
              <div className="bg-white border p-3">
                <MdDeliveryDining size={50} />
                <span>Food Delivery</span>
              </div>

              <div className="bg-white border p-3">
                <MdDeliveryDining size={50} />
                <span>Food Delivery</span>
              </div>
            </div>


            <div className="card-box-wrap d-flex gap-3 py-4 ">
             <div className="bg-white border p-3">
                <MdDeliveryDining size={50} />
                <span>Food Delivery</span>
              </div>
              <div className="bg-white border p-3">
                <MdDeliveryDining size={50} />
                <span>Food Delivery</span>
              </div>

              <div className="bg-white border p-3">
                <MdDeliveryDining size={50} />
                <span>Food Delivery</span>
              </div>
            </div>
             </div>



            <div className="col-md-5">
              <div>
                <img src={store} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
