import React from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

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
            <Link className="dropdown-item" to="/technical-specification">
              Technical Specification
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/sound-box-id-card">
              Sound box Id Card
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/table-pod">
              Table pod
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/table-pod-with-display">
              Table pod with Display
            </Link>
          </li>
        </ul>
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
