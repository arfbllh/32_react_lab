import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username, password };
    console.log(data);
    if (data.username === "admin" && data.password === "1234") {
      setMessage("Login Successful");
    } else {
      setMessage("Login Failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="form-container">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          onChange={(e) => {
            console.log(e.target.value);
            setUsername(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => {
            console.log(e.target.value);
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div>
        <p className="msg">{message}</p>
      </div>
      <div>
        <p>
          Don't have an account?<Link to="/signup">Signup</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
