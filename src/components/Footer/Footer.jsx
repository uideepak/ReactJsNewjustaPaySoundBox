import React from "react";
import logo from "../../Assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="pt-5">
      <div className="" style={{ backgroundColor: `#FFECE5` }}>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-3">
              <div className="py-3">
                <div>
                  <img src={logo} alt="" className="w-100" />
                </div>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so
                </p>
              </div>
              <div className="social-media d-flex rounded-5 gap-3 ">
                <div>
                  <FaFacebook size={25} />
                </div>
                <div>
                  <FaInstagramSquare size={25} />
                </div>
                <div>
                  <FaSquareXTwitter size={25} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <p className="fs-5 fw-bold">Available Sound Box</p>
                <ul className="" style={{listStyle:'none'}}>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">

            <div>
                <p className="fs-5 fw-bold">Company </p>
                <ul className="" style={{listStyle:'none'}}>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">

            <div>
                <p className="fs-5 fw-bold">Subscribe</p> 
                <ul className="" style={{listStyle:'none'}}>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                  <li>Food Delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
