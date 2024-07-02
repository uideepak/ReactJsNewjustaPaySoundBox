import React, { Link } from "react-router-dom";
import logo from "../../src/Assets/logo.png";
import { MdDashboard } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export default function Sidebar() {
  const userData = localStorage.getItem("User");
  const user = JSON.parse(userData);
  console.log(user, "0000");
  return (
    <div>
      <div className="p-5  pt-3 ">
        <div className="mb-3 ">
          <img src={logo} alt="ss" className="bg-white p-3 rounded  w-100" />
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
        {user?.role === "Admin" && (
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
        )}
        {user?.role && user?.role === "Admin" && (
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
        )}

        <div className="mb-3">
          <MdContactPhone size={30} className="text-white" />

          <Link
            to="/admin/allLeads"
            className="text-light text-decoration-none fs-4"
          >
            {" "}
            My Leads
          </Link>
        </div>

        {user?.role && user?.role === "Admin" && (
          <div className="mb-3">
            <FaUser size={30} className="text-white" />

            <Link
              to="admin/subUserlist"
              className="text-light text-decoration-none fs-4"
            >
              User
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
