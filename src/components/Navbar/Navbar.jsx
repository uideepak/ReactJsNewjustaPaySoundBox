import React from "react";
import logo from "../../Assets/logo.png";

export default function Navbar() {
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg bg-light">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Technical Specification
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sound box Id Card{" "}
                    </a>
                  </li>
                  <li>
                    {/* <hr className="dropdown-divider" /> */}
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Table pod{" "}
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Table pod with Display{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Blog</a>
              </li>

              <li className="nav-item">
                <a className="nav-link ">Contact</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
