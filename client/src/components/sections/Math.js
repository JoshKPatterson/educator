// Import React
import React from "react";

// Import Redux
import { connect } from "react-redux";
import { setActivity } from "../../actions/activityActions";

// Import Routing
import { Redirect, Link } from "react-router-dom";

// Import Components
import Header from "../smallParts/Header";
import MainCard from "../smallParts/MainCard";
import Title from "../smallParts/Title";
import Button from "../smallParts/Button";
import ButtonContainer from "../smallParts/ButtonContainer";
import ReturnToMenu from "../smallParts/ReturnToMenu";

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
          <Button customClass='math__button'>
            <Link to='/activity' onClick={() => setActivity(activities.addition)}>Addition</Link>
          </Button>
          <Button customClass='math__button'>
            <Link to='/activity' onClick={() => setActivity(activities.subtraction)}>Subtraction</Link>
          </Button>
          <Button customClass='math__button'>
            <Link to='/activity' onClick={() => setActivity(activities.timesTables)}>Times Tables</Link>
          </Button>
          <Button customClass='math__button'>
            <Link to='/activity' onClick={() => setActivity(activities.division)}>Division</Link>
          </Button>
        </ButtonContainer>
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

export default connect(null, { setActivity})(Math);
