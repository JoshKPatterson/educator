// Import React
import React, { useEffect, useState } from "react";

// Import Redux
import { connect } from "react-redux";
import {
  updateUserData,
  clearActivity,
} from "../../actions/activityActions";

// Import Components
import Header from "../smallParts/Header";
import MainCard from "../smallParts/MainCard";
import Title from "../smallParts/Title";
import ReturnToMenu from "../smallParts/ReturnToMenu";

const Results = (props) => {
  const [name, setName] = useState(null);
  const [score, setScore] = useState(null);
  const [questionCount, setQuestionCount] = useState(null);

  useEffect(() => {
    setName(props.activity.activityName);
    setScore(props.activity.score);
    setQuestionCount(props.activity.questionCount);
    // post results to database

    // create object with data to be posted
    const data = {
      genre: props.activity.genre,
      score: Math.round(
        (props.activity.score / props.activity.questionCount) * 100
      ),
      id:
        typeof props.user._id !== "undefined" ? props.user._id : props.user.id,
    };

    console.log(data);

    // attempt to post
    props.updateUserData(data);
    props.clearActivity();
  }, []);

  return (
    <MainCard>
      <div className="results">
        <Title />
        <Header sectionName="Results" />
        <div className="results__container">
          <h3 className="results__activityName">{name}</h3>
          <h3>Score: {Math.round((score / questionCount) * 100)}%</h3>
        </div>
        <ReturnToMenu />
      </div>
    </MainCard>
  );
};

// Map Activity Prop
const mapStateToProps = (state) => ({
  activity: state.activity,
  user: state.auth.user,
});

export default connect(mapStateToProps, { updateUserData, clearActivity })(
  Results
);
