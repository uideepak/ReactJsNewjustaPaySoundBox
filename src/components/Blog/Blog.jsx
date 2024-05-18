import React from "react";
import Blogbanner from "../../Assets/blog-card.png";
import sales from "../../Assets/sales.png";
import shopkeepr from "../../Assets/shopkeepr.png";

import { SlCalender } from "react-icons/sl";
import { IoMdAlarm } from "react-icons/io";

export default function Blog() {
  return (
    <div>
      <section>
        <div className="container ">
          <div className="row  ">
            <div className="col-md-12">
              <div className="blog">
              <p className="display-3 text-white fw-bold text-center">Blog</p>
            <p className=" text-white fw-medium text-center">
              There is now an abundance of readable dummy texts.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div class="card border-0 ">
                <img src={Blogbanner} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <div className="box-wrap d-flex gap-3 mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <span>
                        <SlCalender />
                      </span>
                      <span>21 Janury 2024</span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span>
                        <IoMdAlarm size={20} />
                      </span>
                      <span>21 Janury 2024</span>
                    </div>
                  </div>

                  <h5 class="card-title">
                    SAY GOODBYE TO SILENT UNCERTAINTY AND EMBRACE THE FUTURE OF
                    SECURE, AUDIBLE PAYMENTS!
                  </h5>
                  <p class="card-text">
                    This innovative Soundbox provides instant audio confirmation
                    for each transaction, ensuring a tangible and secure
                    experience. Compatible with all UPI payment modes,
                    JustaPay's user-centric design simplifies the process for
                    users of all levels. With advanced encryption and fraud
                    prevention, it guarantees safe and smooth transactions.
                    Upgrade your UPI payments with JustaPay — where every
                    transaction becomes confident and memorable with instant
                    audio feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={sales} alt="" className="w-100" />
            </div>
            <div className="col-md-6">
              <div className="px-3 ">
                <div className="box-wrap d-flex gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <span>
                      <SlCalender />
                    </span>
                    <span>21 Janury 2024</span>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <span>
                      <IoMdAlarm size={20} />
                    </span>
                    <span>21 Janury 2024</span>
                  </div>
                </div>
                <div className="fs-4 fw-medium mb-3">
                  Creating Lasting Impressions: How On-Ground Events Forge
                  Stronger Brand-Audience Connections
                </div>
                <p>
                  It is for retail stores like: food delivery, gift shops, fruit
                  vendors, coffee shops, grocery stores. Can be kept at
                  everyplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="px-3 ">
                <div className="box-wrap d-flex gap-3 my-3">
                  <div className="d-flex align-items-center gap-3">
                    <span>
                      <SlCalender />
                    </span>
                    <span>21 Janury 2024</span>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <span>
                      <IoMdAlarm size={20} />
                    </span>
                    <span>21 Janury 2024</span>
                  </div>
                </div>
                <div className="fs-4 fw-medium mb-3">
                  Creating Lasting Impressions: How On-Ground Events Forge
                  Stronger Brand-Audience Connections
                </div>
                <p>
                  It is for retail stores like: food delivery, gift shops, fruit
                  vendors, coffee shops, grocery stores. Can be kept at
                  everyplace.
                </p>
                <p>
                  It is for retail stores like: food delivery, gift shops, fruit
                  vendors, coffee shops, grocery stores. Can be kept at
                  everyplace.
                </p>

                <p>
                  It is for retail stores like: food delivery, gift shops, fruit
                  vendors, coffee shops, grocery stores. Can be kept at
                  everyplace.

                  It is for retail stores like: food delivery, gift shops, fruit
                  vendors, coffee shops, grocery stores. Can be kept at
                  everyplace.
                </p>
              </div>
            </div>

            <div className="col-md-6 mt-5">
              <img src={shopkeepr} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
