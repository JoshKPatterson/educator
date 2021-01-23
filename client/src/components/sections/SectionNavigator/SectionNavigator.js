import React from "react";
import Title from "../../smallParts/Title/Title";
import Button from "../../smallParts/Button/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainCard from "../../smallParts/MainCard/MainCard";
import ReturnToMenu from '../../smallParts/ReturnToMenu/ReturnToMenu'

import "./SectionNavigator.scss";

const SectionNavigator = () => {
  const content = () => {
    return (
      <div className="sectionNavigator">
        <Title />
        <div className="sectionNavigator__buttonContainer">
          <Button>
            <Link to="/math">Math</Link>
          </Button>
          <Button>
            <Link to="/geography">Geography</Link>
          </Button>
        </div>
        <ReturnToMenu />
      </div>
    );
  };
  return <MainCard content={content()} />;
};

export default SectionNavigator;
