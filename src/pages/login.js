import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import user, { addUser } from "../user/user";

const Login = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [login, setLogin] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
      setAlertText("Please Provide all Values");
      return;
    }
    dispatch(addUser({ name, email, password }));
    navigate("/menu");
  };

  const toggleLogin = () => {
    setLogin(!login);
  };

  const handleCheck = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
      setAlertText("Please Provide all Values");
      return;
    }
    const userEmail = localStorage.getItem("email");
    const userPassword = localStorage.getItem("password");

    if (userEmail === email && userPassword === password) {
      navigate("/menu");
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
      setAlertText("Invalid Credentials");
      return;
    }
  };

  return (
    <div className="login-main-div">
      <section className="container-form">
        <h3>Login/Register</h3>
        {alert && (
          <div className="alert">
            <h1>{alertText}</h1>
          </div>
        )}
        <form className="form-main">
          {!login && (
            <div className="user-exist">
              <label>Name</label>
              <input
                required
                type="text"
                name="user_name"
                id=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <label>Email</label>
          <input
            required
            type="text"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>password</label>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button className="login-btn" onClick={() => toggleLogin()}>{`${
          login ? "New Here ? Register" : "Already a Member ? Sign in"
        }`}</button>
        {login ? (
          <button className="submit-btn" onClick={(e) => handleCheck(e)}>
            Login
          </button>
        ) : (
          <button className="submit-btn" onClick={(e) => handleClick(e)}>
            Register
          </button>
        )}
      </section>
    </div>
  );
};

export default Login;
