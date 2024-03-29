// Import React
import React from "react";

// Import Redux
import { connect } from "react-redux";

// Import Routing
import { Link } from "react-router-dom";

// Import Components
import Header from "../smallParts/Header";
import MainCard from "../smallParts/MainCard";
import Title from "../smallParts/Title";
import Button from "../smallParts/Button";
import ButtonContainer from "../smallParts/ButtonContainer";

// MainMenu Component
const MainMenu = ({ user }) => {
  return (
    <MainCard>
      <div className="mainMenu">
        <Title />
        <Header sectionName="Main Menu" />
        <h2>
          Welcome <span className="mainMenu__userName">{user.name}</span>
        </h2>
        <ButtonContainer>
          <Button customClass='listButton'>
            <Link to="/sections">Study</Link>
          </Button>
          <Button customClass='listButton'>
            <Link to="/profile">Profile</Link>
          </Button>
          <Button customClass='listButton'>
            <Link to="/logout">Logout</Link>
          </Button>
        </ButtonContainer>
      </div>
    </MainCard>
  );
};

// Map Auth Prop
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(MainMenu);
