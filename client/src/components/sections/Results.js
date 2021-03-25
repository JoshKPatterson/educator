// Import React
import React, { useEffect, useState } from "react";

// Import Redux
import { connect } from "react-redux";
import { updateUserData, clearActivity } from "../../actions/activityActions";
import { loadUser } from "../../actions/authActions";

// Import Components
import Header from "../smallParts/Header";
import MainCard from "../smallParts/MainCard";
import Title from "../smallParts/Title";
import ReturnToMenu from "../smallParts/ReturnToMenu";

// Results Component
const Results = (props) => {
  // State Setup
  const [name, setName] = useState(null);
  const [score, setScore] = useState(null);
  const [questionCount, setQuestionCount] = useState(null);

  // Immediately Set State Values To Redux Values
  useEffect(() => {
    setName(props.activity.activityName);
    setScore(props.activity.score);
    setQuestionCount(props.activity.questionCount);

    // Create Data Object To Be Posted
    const data = {
      genre: props.activity.genre,
      score: Math.round(
        (props.activity.score / props.activity.questionCount) * 100
      ),
      id:
        typeof props.user._id !== "undefined" ? props.user._id : props.user.id,
    };

    console.log(data);

    // Attempt To Post
    props.updateUserData(data);

    // Clear Redux After Post
    props.clearActivity();

    // Reload User To Update Profile Information
    props.loadUser();
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

export default connect(mapStateToProps, {
  updateUserData,
  clearActivity,
  loadUser,
})(Results);
