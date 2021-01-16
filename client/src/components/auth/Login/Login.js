// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { login } from "../../../actions/authActions";

// Import Routing
import { Redirect } from "react-router-dom";

// Import Components
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";

// Import Custom Hooks
import { usePrevious, authCheck } from "../../../customHooks";

// Import Styles
import "./Login.scss";

// Login Component
const Login = (props) => {

  // State Setup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState(null);
  const [redirect, setRedirect] = useState(null);

  // Destructuring Props
  const { error, isAuthenticated } = props;

  // Getting Ref To Initial/Previous Error Message
  const prevError = usePrevious(error);

  // Compare New Error With Ref Error
  useEffect(() => {
    if (error !== prevError) {

      // Check For Login Error
      if (error.id === "LOGIN_FAIL") {
        setErrMessage(error.msg.msg);
      } else {
        setErrMessage(null);
      }
    }
  }, [error]);

  // Check If Logged In For Redirect
  useEffect(() => {
    if (isAuthenticated) {
      setRedirect(true);
    } else if (isAuthenticated === false) {
      setRedirect(false);
    }
  }, [isAuthenticated]);

  // Update State With Login Info
  const onChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  // Send Login Info On Submit
  const onSubmit = (e) => {
    e.preventDefault();

    // Create User Object
    const user = {
      email,
      password,
    };

    // Attempt To Login
    props.login(user);
  };

  // Content For Component
  const content = () => {
    return (
      <div className="login">
        <Header sectionName="Login" />
        {errMessage ? <p>{errMessage}</p> : null}
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={onChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={onChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };

  // Render Component
  return authCheck(redirect, <Redirect to="/" />, <MainCard content={content()} />);
};

// Map Error And Auth Props
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
