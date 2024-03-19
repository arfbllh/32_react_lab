import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

class Signup extends Component {

  render() {
    return (
      <div className="signup-container">
        Signup
        <form className="form-container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username"></input>
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"></input>
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"></input>
          <br />
          <button type="submit">Submit</button>
        </form>
        <div>
          <p>
            Already have an account?<Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
