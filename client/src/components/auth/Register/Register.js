// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";

// Import Routing
import { useHistory } from 'react-router-dom';

// Import Components
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";

// Import Custom Hooks
import { usePrevious } from '../../../customHooks'

// Import Styles
import "./Register.scss";

const Register = (props) => {

  // State Setup

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState(null);

  let history = useHistory();

  const { error, isAuthenticated } = props;

  // Getting Ref To Initial/Previous Error Message

  const prevError = usePrevious(error);

  useEffect(() => {

    // Compare New Error With Old Error

    if (error !== prevError) {

      // Check For Register Error
  
      if (error.id === "REGISTER_FAIL") {
        setErrMessage(error.msg.msg);
      } else {
        setErrMessage(null)
      }
    }
  }, [error])

  // Check For Authenticated

  useEffect(() => {
    if(isAuthenticated){
      console.log('authenticated')
    }
    // history.push('/RegisterSuccess')
  }, [isAuthenticated])

  // State Changes From Text Inputs

  const onChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
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

  // Function For Form Submission

  const onSubmit = (e) => {
    e.preventDefault();

    // Create User Object
    const newUser = {
      name,
      email,
      password,
    };

    // Attempt To Register
    props.registerUser(newUser);
  };

  // Content For Component

  const content = () => {
    return (
      <div className="register">
        <Header sectionName="Register" />
        { errMessage ? <p>{errMessage}</p> : null}
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={onChange}
          />
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  return <MainCard content={content()} />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { registerUser })(Register);
