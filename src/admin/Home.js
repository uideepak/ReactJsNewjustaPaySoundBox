import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";




export default function Home() {
  return (
    <div>
      <div className="d-flex">
        <div className="w-25 admin-sidebar ">
          <Sidebar />
        </div>

        <div className="w-75">
        <Header/>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
