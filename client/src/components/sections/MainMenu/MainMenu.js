import React, { useState } from "react";
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import Title from '../../smallParts/Title/Title'
import Button from '../../smallParts/Button/Button'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import "./MainMenu.scss";

const MainMenu = ({ user }) => {
  const content = () => {
    return (
      <div className="mainMenu">
        <Title />
        <Header sectionName="Main Menu" />

        <h2>Welcome <span className='mainMenu__userName'>{user.name}</span></h2>
        <div className='mainMenu_buttonContainer'>
          <Button>
            <Link to="/math" className="link">Math</Link>
          </Button>
          <Button>
            <Link to="/geography">Geography</Link>
          </Button>
        </div>
      </div>
    );
  };

  return <MainCard content={content()} />;
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(MainMenu);
