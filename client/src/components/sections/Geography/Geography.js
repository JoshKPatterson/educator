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
import './Geography.scss'

// Geography Component
const Geography = ({ setActivity }) => {
  const activities = {
    usStates: {
      name: 'US States',
      genre: 'geography',
      questionCount: 51,
    }
  }
  return (
    <MainCard>
      <div className="geography">
        <Title />
        <Header sectionName="Geography" />
        <ButtonContainer>
          <Button customClass='geography__button'>
            <Link to='/activity' onClick={() => setActivity(activities.usStates)}>US States</Link>
          </Button>
          <Button customClass='geography__button'><Link>Placeholder</Link></Button>
          <Button customClass='geography__button'><Link>Placeholder</Link></Button>
          <Button customClass='geography__button'><Link>Placeholder</Link></Button>
        </ButtonContainer>
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

export default connect(null, { setActivity})(Geography);
