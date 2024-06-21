import React from "react";
import { Navigate } from "react-router-dom";
const OpenRoute = ({ children }) => {
  const token = localStorage.getItem("Token");
  
  if (token === null) {
    return <Navigate to="/admin/login" />;
  } else {
    return children;
  }
};
export default OpenRoute;
