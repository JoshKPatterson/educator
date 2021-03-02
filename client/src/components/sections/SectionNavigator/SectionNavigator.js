// Import React
import React from "react";

// Import Components
import Title from "../../smallParts/Title/Title";
import Button from "../../smallParts/Button/Button";
import MainCard from "../../smallParts/MainCard/MainCard";
import ButtonContainer from "../../smallParts/ButtonContainer/ButtonContainer";
import ReturnToMenu from "../../smallParts/ReturnToMenu/ReturnToMenu";

// Import Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import Styles
import "./SectionNavigator.scss";

// Section Navigator Component
const SectionNavigator = () => {
  return (
    <MainCard>
      <div className="sectionNavigator">
        <Title />
        <ButtonContainer>
          <Button customClass='sectionNavigator__button'>
            <Link to="/math">Math</Link>
          </Button>
          <Button customClass='sectionNavigator__button'>
            <Link to="/geography">Geography</Link>
          </Button>
        </ButtonContainer>
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

export default SectionNavigator;
