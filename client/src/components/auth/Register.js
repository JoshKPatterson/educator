// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

// Import Routing
import { Redirect, Link } from "react-router-dom";

// Import Components
import Header from "../smallParts/Header";
import MainCard from "../smallParts/MainCard";
import Button from "../smallParts/Button";
import Title from "../smallParts/Title";
import ButtonContainer from "../smallParts/ButtonContainer";
import TextInput from "../smallParts/TextInput";

// Import Custom Hooks
import { usePrevious, authCheck } from "../../customHooks";

// Register Component
const Register = (props) => {
  // State Setup
  const [name, setName] = useState("");
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
      // Check For Register Error
      if (error.id === "REGISTER_FAIL") {
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

  // Update State With Registration Info
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

  // Send Registration Info On Submit
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
  // Written Outside Return Statement For Clarity With Auth Check
  const content = () => {
    return (
      <div className="register">
        <Title />
        <Header sectionName="Register" />
        {errMessage ? <p>{errMessage}</p> : null}
        <ButtonContainer>
        <form onSubmit={onSubmit} className='register__form'>
        <TextInput
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={onChange}
              label='name'
              labelText='Name'
            />
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
          <Button type="submit"><p>Register</p></Button>
        </form>
          <Button>
              <Link to='/login'>Existing User</Link>
            </Button>
        </ButtonContainer>
      </div>
    );
  };
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

export default connect(mapStateToProps, { registerUser })(Register);
