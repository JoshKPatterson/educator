// Import React
import React from "react";

// Import Redux
import { connect } from "react-redux";

// Import Components
import Header from "../smallParts/Header";
import MainCard from "../smallParts/MainCard";
import Title from "../smallParts/Title";
import USStates from "../activities/USStates";
import Addition from "../activities/Addition";
import Subtraction from "../activities/Subtraction";
import TimesTables from "../activities/TimesTables";
import Division from "../activities/Division";

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
      case "Division":
        return <Division />;
      default:
        return null;
    }
  };
  return (
    <MainCard>
      <div className="activity">
        <Title />
        {activitySwitch()}
      </div>
    </MainCard>
  );
};

const mapStateToProps = (state) => ({
  activity: state.activity,
});

export default connect(mapStateToProps)(Activity);
