// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { logout } from "../../../actions/authActions";

// Import Routing
import { Redirect } from "react-router-dom";

// Import Components
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";

// Import Custom Hooks
import { authCheck } from "../../../customHooks";

const Logout = (props) => {
  // State Setup
  const [redirect, setRedirect] = useState(null);

  // Destructure Prop
  const { logout, isAuthenticated } = props;

  // Check If Logged In For Redirect
  useEffect(() => {
    if (isAuthenticated) {
      setRedirect(false);
    } else if (isAuthenticated === false) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

  // Content For Component
  const content = () => {
    return (
      <div className="logout">
        <Header sectionName="Logout" />
        <button onClick={logout}>Logout</button>
      </div>
    );
  };
  // return <MainCard content={content()} />;
  return authCheck(
    redirect,
    <Redirect to="/" />,
    <MainCard content={content()} />
  );
};

// Map Auth Prop
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Logout);
