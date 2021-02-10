// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { incrementScore } from "../../../actions/activityActions";

// Import Routing
import { Redirect, Link } from "react-router-dom";

// Import Components
import Button from "../../smallParts/Button/Button";

// Import Styles
import "./Subtraction.scss";
 const Subtraction = (props) => {

  // State Setup
  const [questionNum, setQuestionNum] = useState(0);
  const [questionList, setQuestionList] = useState(null);
 }

 // Map Activity Prop
const mapStateToProps = state => ({
  activity: state.activity
})

 export default connect(mapStateToProps, { incrementScore })(Subtraction)