// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

// Import Routing
import { Redirect } from "react-router-dom";

// Import Components
import Header from "../smallParts/Header";
import MainCard from "../smallParts/MainCard";
import Button from "../smallParts/Button";
import ReturnToMenu from "../smallParts/ReturnToMenu";
import Title from "../smallParts/Title";
import ButtonContainer from "../smallParts/ButtonContainer";

// Import Custom Hooks
import { authCheck } from "../../customHooks";

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
  // Written Outside Return Statement For Clarity With Auth Check
  const content = () => {
    return (
      <div className="logout">
        <Title />
        <Header sectionName="Logout" />
        <ButtonContainer>
          <h3>Are you sure?</h3>
          <Button action={logout}>
            <p>Logout</p>
          </Button>
        </ButtonContainer>
        <ReturnToMenu />
      </div>
    );
  };

  return authCheck(
    redirect,
    <Redirect to="/" />,
    <MainCard>{content()}</MainCard>
  );
};

// Map Auth Prop
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Logout);
