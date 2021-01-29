// Import React
import React from "react";

// Import Redux
import { connect } from "react-redux";
import { setActivity } from "../../../actions/activityActions";

// Import Routing
import { Redirect, Link } from "react-router-dom";

// Import Components
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import Title from "../../smallParts/Title/Title";
import Button from "../../smallParts/Button/Button";
import ButtonContainer from "../../smallParts/ButtonContainer/ButtonContainer";
import ReturnToMenu from "../../smallParts/ReturnToMenu/ReturnToMenu";

// Import Styles
import "./Math.scss";

// Math Component
const Math = ({ setActivity }) => {
  
  return (
    <MainCard>
      <div className="math">
        <Title />
        <Header sectionName="Math" />
        <ButtonContainer>
          <Button>
            <Link to='/' onClick={() => setActivity('Addition')}>Addition</Link>
          </Button>
          <Button>
            <Link to='/' onClick={() => setActivity('Subtraction')}>Subtraction</Link>
          </Button>
          <Button>
            <Link to='/' onClick={() => setActivity('Times Tables')}>Times Tables</Link>
          </Button>
          <Button>
            <Link to='/' onClick={() => setActivity('Division')}>Division</Link>
          </Button>
        </ButtonContainer>
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

export default connect(null, { setActivity})(Math);
