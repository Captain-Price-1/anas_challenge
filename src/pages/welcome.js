import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((store) => {
    return store.user;
  });
  return (
    <div className="main-div">
      <div className="welcome-body">
        <h1>
          Welcome to Food's <br />
          Kitchen
        </h1>
        <Link className="menu-link" to={`${user ? "/menu" : "/login"}`}>
          Go to Menu
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
