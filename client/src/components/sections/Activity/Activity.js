// Import React
import React from "react";

// Import Redux
import { connect } from "react-redux";

// Import Components
import Header from "../../smallParts/Header/Header";
import MainCard from "../../smallParts/MainCard/MainCard";
import Title from "../../smallParts/Title/Title";
import USStates from "../../activities/USStates/USStates";
import Addition from "../../activities/Addition/Addition";
import Subtraction from "../../activities/Subtraction/Subtraction";
import TimesTables from "../../activities/TimesTables/TimesTables";

// Import Styles
import "./Activity.scss";

// Activity Component
const Activity = ({ activity }) => {
  const activitySwitch = () => {
    switch (activity.activityName) {
      case "US States":
        return <USStates />;
      case "Addition":
        return <Addition />;
      case "Subtraction":
        return <Subtraction />;
      case "Times Tables":
        return <TimesTables />;
      default:
        return null;
    }
  };
  return (
    <MainCard>
      <Title />
      <div className="activity">{activitySwitch()}</div>
    </MainCard>
  );
};

const mapStateToProps = (state) => ({
  activity: state.activity,
});

export default connect(mapStateToProps)(Activity);
