import React from "react";
import { SlLocationPin } from "react-icons/sl";
export default function () {
  return (
    <div>
      <section>
        <div className="container ">
          <div className="row ">
           <div className="col-md-12">
            <div className="contact">
            <p className="fs-1 text-white fw-bold text-center">
              If you have any quiries fill free to contact us
            </p>
            {/* <p className=" text-white fw-medium text-center">
              There is now an abundance of readable dummy texts.
            </p> */}
            </div>
           </div>
          </div>
        </div>
      </section>

      <section className="py-3 ">
        <div className="container">
          <div className="row contacts align-items-center ">
            <div className="col-md-5">
              <div className="text-white p-4">
                <div className=" d-flex gap-3">
                  <SlLocationPin size={25} />
                  <div>Adress</div>
                </div>

                <p>
                  D-231, Hanuman Nagar, Amrapali Marg, Vaishali Nagar, Jaipur,
                  Rajasthan 302021
                </p>
              </div>

              <div className="text-white  p-4 ">
                <div className=" d-flex gap-3">
                  <SlLocationPin size={25} />
                  <div>Adress</div>
                </div>

                <p>
                  D-231, Hanuman Nagar, Amrapali Marg, Vaishali Nagar, Jaipur,
                  Rajasthan 302021
                </p>
              </div>

              <div className="text-white p-4">
                <div className=" d-flex gap-3">
                  <SlLocationPin size={25} />
                  <div>Adress</div>
                </div>

                <p>
                  D-231, Hanuman Nagar, Amrapali Marg, Vaishali Nagar, Jaipur,
                  Rajasthan 302021
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div
                className=" bg-white  m-3 p-4  rounded
              "
              >
                <p className="fs-1 fw-bold"> Contact us</p>
                <p className="text-muted">
                  We're here to help with any questions. Just fill out the form,
                  and we'll reach out.
                </p>

                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Phone Number
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <select
                    class="form-select mb-3"
                    aria-label="Default select example "
                  >
                    <option selected> Select  Devices</option>
                    <option value="Table Pod">Table Pod</option>
                    <option value="ID Card ">Soundbox ID card</option>
                    <option value="3">Table pod with Display</option>
                    <option value="3">Table Pod With Detachable QR Plate</option>

                  </select>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.346446660166!2d75.74118337409348!3d26.89249796096141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4925fb12825%3A0xb522774967322f7c!2sSinghtek%20BizGroup%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1714382407957!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
