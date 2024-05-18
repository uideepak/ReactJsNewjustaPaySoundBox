import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [hide, setHide] = useState();
  const chnageClassToggle = () => {
    let toggle1 = document.getElementById("offcanvasNavbar");
    toggle1.className = "offcanvas offcanvas-start hide";
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="w-32" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            data-bs-scroll="true"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                {" "}
                <img src={logo} alt="Logo" className="w-32" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body justify-content-end ">
              <ul className="navbar-nav mb-2 mb-lg-0 gap-2">
                <li className="nav-item" onClick={chnageClassToggle}>
                  <NavLink exact className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" onClick={chnageClassToggle}>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item dropdown" onClick={chnageClassToggle}>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/product"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item" onClick={chnageClassToggle}>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item" onClick={chnageClassToggle}>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
