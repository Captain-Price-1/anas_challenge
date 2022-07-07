import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const user = { email, password };

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
