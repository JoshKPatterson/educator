import React, { useState } from "react";
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import "./MainMenu.scss";

const MainMenu = ({ user }) => {
  const content = () => {
    return (
      <div className="mainMenu">
        <Header sectionName="Main Menu" />
        <h2>Welcome {user.name}</h2>
        <Link to="/math" className="link">
          Math
        </Link>
        <Link to="/geography">Geography</Link>
      </div>
    );
  };

  return <MainCard content={content()} />;
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(MainMenu);
