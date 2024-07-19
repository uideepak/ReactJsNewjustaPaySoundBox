import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../admin/Home";
import DashBord from "../../admin/DashBord";
import AddBlog from "../../admin/AddBlog";
import AllBlog from "../../admin/AllBlog";
import AllLeads from "../../admin/AllLeads";
import EditBlog from "../../admin/EditBlog";
import BlogCount from "../../admin/BlogCount";
import OpenRoute from "../../admin/OpenRoute";
import "react-toastify/dist/ReactToastify.css";
import Signup from "../../admin/Signup";
import Login from "../../admin/Login";
import SubUserSingup from "../../admin/subadmin/SubUserSingup";
import SubUserList from "../../admin/subadmin/SubUserList";
import EditSubuUser from "../../admin/subadmin/EditSubuUser";
export default function AdminRoute() {
  return (
    <div>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<Signup />} />

        <Route
          element={
            <OpenRoute>
              <Home />
            </OpenRoute>
          }
        >
          <Route
            path="admin/dashboard"
            element={
              <OpenRoute>
                <DashBord />
              </OpenRoute>
            }
          />

          <Route
            path="admin/addblog"
            element={
              <OpenRoute>
                <AddBlog />
              </OpenRoute>
            }
          />

          <Route
            path="admin/allblog"
            element={
              <OpenRoute>
                <AllBlog />
              </OpenRoute>
            }
          />
          <Route
            path="admin/allLeads"
            element={
              <OpenRoute>
                <AllLeads />
              </OpenRoute>
            }
          />
          <Route
            path="admin/editblog"
            element={
              <OpenRoute>
                <EditBlog />
              </OpenRoute>
            }
          />
          <Route
            path="admin/blogcount"
            element={
              <OpenRoute>
                <BlogCount />
              </OpenRoute>
            }
          />
          <Route
            path="admin/subuser"
            element={
              <OpenRoute>
                <SubUserSingup />
              </OpenRoute>
            }
          />

          <Route
            path="admin/subUserlist"
            element={
              <OpenRoute>
                <SubUserList />
              </OpenRoute>
            }
          />

          <Route
            path="admin/editsubuser"
            element={
              <OpenRoute>
                <EditSubuUser />
              </OpenRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
