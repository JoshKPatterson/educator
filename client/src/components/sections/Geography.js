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

// Geography Component
const Geography = ({ setActivity }) => {
  const statesQuestionNumCount = [10, 25, 51]
  const activities = {
    usStates: {
      name: 'US States',
      genre: 'geography',
      questionCount: statesQuestionNumCount,
    }
  }
  return (
    <MainCard>
      <div className="geography">
        <Title />
        <Header sectionName="Geography" />
        <ButtonContainer>
          <Button customClass='geography__button'>
            <Link to='/questioncount' onClick={() => setActivity(activities.usStates)}>US States</Link>
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
