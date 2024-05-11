import React from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
     
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="w-32" />
          </a>
          <bu
            tton
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </bu>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                
                {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
