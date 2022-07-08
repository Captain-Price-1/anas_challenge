import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => {
    return store.user;
  });

  if (user === null) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
