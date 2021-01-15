// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { login } from "../../../actions/authActions";

// Import Routing
import { useHistory } from "react-router-dom";

// Import Components
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";

// Import Custom Hooks
import { usePrevious } from "../../../customHooks";

// Import Styles
import "./Login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState(null);

  let history = useHistory();

  const { error, isAuthenticated } = props;

  // Getting Ref To Initial/Previous Error Message

  const prevError = usePrevious(error);

  useEffect(() => {
    if (error !== prevError) {
      // Check For Register Error

      if (error.id === "LOGIN_FAIL") {
        setErrMessage(error.msg.msg);
      } else {
        setErrMessage(null);
      }
    }
    if (isAuthenticated) {
      console.log("authenticated");
      // history.push('/')
    }
  }, [error]);

  // Check For Authenticated

  useEffect(() => {
    if (isAuthenticated) {
      console.log("authenticated");
      history.push('/')
    }
  });

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

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    // Attempt To Login
    props.login(user);
  };

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
        <button onClick={() => console.log(`Auth? ${isAuthenticated}`)}>
          Auth?
        </button>
      </div>
    );
  };
  return <MainCard content={content()} />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
