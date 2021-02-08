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
  const activities = {
    addition: {
      name: 'Addition',
      genre: 'math',
      questionCount: 10
    },
    subtraction: {
      name: 'Subtraction',
      genre: 'math',
      questionCount: 10
    },
    timesTables: {
      name: 'Times Tables',
      genre: 'math',
      questionCount: 10
    },
    division: {
      name: 'Division',
      genre: 'math',
      questionCount: 10
    }
  }
  
  return (
    <MainCard>
      <div className="math">
        <Title />
        <Header sectionName="Math" />
        <ButtonContainer>
          <Button>
            <Link to='/activity' onClick={() => setActivity(activities.addition)}>Addition</Link>
          </Button>
          <Button>
            <Link to='/activity' onClick={() => setActivity(activities.subtraction)}>Subtraction</Link>
          </Button>
          <Button>
            <Link to='/activity' onClick={() => setActivity(activities.timesTables)}>Times Tables</Link>
          </Button>
          <Button>
            <Link to='/activity' onClick={() => setActivity(activities.division)}>Division</Link>
          </Button>
        </ButtonContainer>
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

export default connect(null, { setActivity})(Math);
