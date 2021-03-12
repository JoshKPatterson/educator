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
  const mathQuestionNumCount = [10, 20, 30, 40];

  const activities = {
    addition: {
      name: "Addition",
      genre: "math",
      questionCount: mathQuestionNumCount,
    },
    subtraction: {
      name: "Subtraction",
      genre: "math",
      questionCount: mathQuestionNumCount,
    },
    timesTables: {
      name: "Times Tables",
      genre: "math",
      questionCount: mathQuestionNumCount,
    },
    division: {
      name: "Division",
      genre: "math",
      questionCount: mathQuestionNumCount,
    },
  };

  return (
    <MainCard>
      <div className="math">
        <Title />
        <Header sectionName="Math" />
        <ButtonContainer>
          <Button customClass="math__button">
            <Link
              to="/questioncount"
              onClick={() => setActivity(activities.addition)}
            >
              Addition
            </Link>
          </Button>
          <Button customClass="math__button">
            <Link
              to="/questioncount"
              onClick={() => setActivity(activities.subtraction)}
            >
              Subtraction
            </Link>
          </Button>
          <Button customClass="math__button">
            <Link
              to="/questioncount"
              onClick={() => setActivity(activities.timesTables)}
            >
              Times Tables
            </Link>
          </Button>
          <Button customClass="math__button">
            <Link
              to="/questioncount"
              onClick={() => setActivity(activities.division)}
            >
              Division
            </Link>
          </Button>
        </ButtonContainer>
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

export default connect(null, { setActivity })(Math);
