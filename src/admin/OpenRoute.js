import React from "react";
import { json, Navigate } from "react-router-dom";
const OpenRoute = ({ children }) => {
  const token = localStorage.getItem("Token");
  const user = localStorage.getItem("User");
  const userdata = JSON.parse(user);
  if (token === null) {
    return <Navigate to="/admin/login" />;
  } else {
    return children;
  }
};
export default OpenRoute;
