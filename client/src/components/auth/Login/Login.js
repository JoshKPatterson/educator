// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { login } from "../../../actions/authActions";

// Import Routing
import { Redirect, Link } from "react-router-dom";

// Import Components
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import Button from "../../smallParts/Button/Button";
import Title from "../../smallParts/Title/Title";
import ButtonContainer from "../../smallParts/ButtonContainer/ButtonContainer";
import TextInput from "../../smallParts/TextInput/TextInput";

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
  // Written Outside Return Statement For Clarity With Auth Check
  const content = () => {
    return (
      <div className="login">
        <Title />
        <Header sectionName="Login" />
        {errMessage ? <p>{errMessage}</p> : null}
        <ButtonContainer>
          <form onSubmit={onSubmit} className="login__form">
            <TextInput
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={onChange}
              label='email'
              labelText='Email'
            />
            <TextInput
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={onChange}
              label='password'
              labelText='Password'
            />
            <Button type="submit"><p>Login</p></Button>
            
          </form>
          <Button>
              <Link to="/register">New User</Link>
            </Button>
            </ButtonContainer>
      </div>
    );
  };

  // Render Component
  return authCheck(
    redirect,
    <Redirect to="/" />,
    <MainCard>{content()}</MainCard>
  );
};

// Map Error And Auth Props
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
