import React, { Link } from "react-router-dom";
import logo from "../../src/Assets/logo.png";
import { MdDashboard } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";

export default function Sidebar() {
  return (
    <div>
      <div className="p-5  pt-3">
        <div className="mb-3 ">
          <img src={logo} alt="ss" className="bg-white p-3 rounded" />
        </div>
        <div className="mb-3  d-flex align-items-center">
          <MdDashboard size={30} className="text-white " />

          <Link
            to="/admin/dashboard "
            className="text-light text-decoration-none fs-4"
          >
            Dashboard
          </Link>
        </div>
        <div className="mb-3">
          <MdAddToPhotos size={30} className="text-white " />

          <Link
            to="/admin/addblog"
            className="text-light text-decoration-none fs-4"
          >
            {" "}
            Add Blog
          </Link>
        </div>
        <div className="mb-3">
          <AiFillAppstore size={30} className="text-white " />

          <Link
            to="/admin/allblog"
            className="text-light text-decoration-none fs-4"
          >
            {" "}
            My Blog
          </Link>
        </div>
        <div className="mb-3">
          <MdContactPhone size={30} className="text-white" />

          <Link
            to="/admin/allLeads"
            className="text-light text-decoration-none fs-4"
          >
            {" "}
            Leads
          </Link>
        </div>
      </div>
    </div>
  );
}
