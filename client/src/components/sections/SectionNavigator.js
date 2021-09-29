// Import React
import React from "react";

// Import Components
import Title from "../smallParts/Title";
import Header from "../smallParts/Header";
import Button from "../smallParts/Button";
import MainCard from "../smallParts/MainCard";
import ButtonContainer from "../smallParts/ButtonContainer";
import ReturnToMenu from "../smallParts/ReturnToMenu";

// Import Routing
import { Link } from "react-router-dom";

// Section Navigator Component
const SectionNavigator = () => {
  return (
    <MainCard>
      <div className="sectionNavigator">
        <Title />
        <Header sectionName="Sections" />
        <ButtonContainer>
          <Button customClass="listButton">
            <Link to="/math">Math</Link>
          </Button>
          <Button customClass="listButton">
            <Link to="/geography">Geography</Link>
          </Button>
        </ButtonContainer>
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

export default SectionNavigator;
