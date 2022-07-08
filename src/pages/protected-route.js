import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => {
    return store.user;
  });

  console.log(user);
  if (user === null) {
    console.log(user);
    console.log("inside the nai");
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
