import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="d-flex">
        <div
          className=" admin-sidebar "
          style={{ width: "20%", minHeight: "100vh" }}
        >
          <Sidebar />
        </div>

        <div style={{ width: "80%" }}>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
