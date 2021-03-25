// Import React
import React from "react";

// Import Redux
import { connect } from "react-redux";
import { setActivity, clearActivity } from "../../actions/activityActions";

// Import Routing
import { Redirect, Link } from "react-router-dom";

// Import Components
import Header from "../smallParts/Header";
import MainCard from "../smallParts/MainCard";
import Title from "../smallParts/Title";
import Button from "../smallParts/Button";
import ButtonContainer from "../smallParts/ButtonContainer";
import ReturnToMenu from "../smallParts/ReturnToMenu";

// Question Num Selector Component
const QuestionNumSelector = (props) => {
  const questions = [...props.activity.questionCount];
  const activityObj = {
    name: props.activity.activityName,
    genre: props.activity.genre,
    questionCount: null,
  };

  const handleClick = (num) => {
    activityObj.questionCount = num;
    props.setActivity(activityObj);
  };

  return (
    <MainCard>
      <div className="questionNumSelector">
        <Title />
        <Header sectionName="Question Count" />
        <ButtonContainer>
          {questions.map((num) => {
            return (
              <Button customClass='listButton'>
                <Link to="/activity" onClick={() => handleClick(num)}>
                  {num}
                </Link>
              </Button>
            );
          })}
        </ButtonContainer>
        <ReturnToMenu action={() => props.clearActivity()} />
      </div>
    </MainCard>
  );
};

const mapStateToProps = (state) => ({
  activity: state.activity,
});

export default connect(mapStateToProps, { setActivity, clearActivity })(QuestionNumSelector);
