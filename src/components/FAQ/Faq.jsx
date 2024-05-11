import React from "react";

export default function Faq() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <p className="text-center fs-1 fw-medium">
            Frequently Asked Questions
          </p>
        </div>
        <div className="col-md-12">
          <div div className="accordion " id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is JustaPay Soundbox?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  JustaPay Soundbox is a revolutionary payment device that
                  combines cutting-edge technology with secure transactions and
                  best sound quality to ensure a seamless payment experience for
                  both businesses and customers
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Is JustaPay Soundbox compatible with mobile devices?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Yes, JustaPay Soundbox is fully responsive and optimized for
                  use on mobile devices. Customers can make payments
                  conveniently from their smartphones or tablets without any
                  hassle.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Is JustaPay Soundbox secure?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Yes, JustaPay Soundbox prioritizes security above all else. It
                  employs industry-standard encryption protocols to safeguard
                  sensitive financial information and prevent unauthorized
                  access.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
How can I set up a JustaPay Soundbox for my business?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Setting up a JustaPay Soundbox for your business is simple and straightforward. You can contact our sales team to discuss your requirements and get started with the setup process.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
How JustaPay Soundbox works? 
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                JustaPay Soundbox securely processes transactions by encrypting customer payment details, verifying them with payment gateways, and confirming successful transactions. It provides businesses with real-time notifications and customers with a seamless checkout experience, ensuring security and efficiency. 
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
