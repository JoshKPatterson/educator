// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { incrementScore } from "../../actions/activityActions";

// Import Routing
import { Redirect, Link } from "react-router-dom";

// Import Components
import Button from "../smallParts/Button/Button";

// Import Static Data
import { statesArr } from "../../utilities/staticData";

// US States Activity Component
const USStates = (props) => {

  // State Setup
  const [questionNum, setQuestionNum] = useState(0);
  const [statesList, setStatesList] = useState(null);

  // Turn State String Into Object
  const objConstructor = (state) => {

    // Create Object
    let myObj = new Object();
  
    // Set Name And Link
    myObj.name = state;
    myObj.link = `https://educator-bucket.s3.amazonaws.com/us_states/${state.replace(/ /g, "_").toLowerCase()}.jpg`;

    // Create Empty Array To Populate With Wrong Answers
    myObj.falseAnswers = new Array();

    // Check If Array Is Full (3)
    while (myObj.falseAnswers.length < 3) {

      // Select Random Number Between 0 and 51
      let randomIndex = Math.floor(Math.random() * 51);
      if (

        // If State At Random Index Is Not Selected State And Not In Array
        myObj.name !== statesArr[randomIndex] &&
        !myObj.falseAnswers.includes(statesArr[randomIndex])
      ) {
        myObj.falseAnswers.push(statesArr[randomIndex]);
      }
    }

    // Combine False Answers With Corret Answer Into Aray
    let answerOrder = [myObj.name].concat(myObj.falseAnswers);

    // Shuffle Order Of Possible Answers
    myObj.answerOrder = shuffle(answerOrder);
    return myObj;
  };

  // Iterate Over Array Of States To Make Array Of Objects
  const arrConstructor = () => {
  
    // Initialize Empty Array
    let objArr = new Array();

    // Iterate Over States Array, Call Function On Each Entry
    statesArr.forEach((state) => {
      objArr.push(objConstructor(state));
    });

    // Return New Array
    return objArr;
  };

  // Shuffle Function (Fisher-Yates Algorithm)
  const shuffle = (array) => {
    let newArr = [...array];
    let m = newArr.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = newArr[m];
      newArr[m] = newArr[i];
      newArr[i] = t;
    }
    return newArr;
  };

  // Create Randomized Array Of Objects And Update It To State
  useEffect(() => {
    const randomArr = shuffle(arrConstructor());
    setStatesList(randomArr);  
  }, [])
  
  // Initialize Dynamic Values To Be Recycled For Questions
  let currentQuestion,
  option1,
  option2,
  option3,
  option4;

  // Wait Until State Updates Before Updating currentQuestion
  if(statesList){
    currentQuestion = statesList[questionNum];
    [option1, option2, option3, option4] = currentQuestion.answerOrder;
  }

  // Checks If Answer Is Correct
  const correctOrNo = (question) => {
    if (question === currentQuestion.name) {

      // Action To Redux Store To Update Score
      props.incrementScore();
    } 

    // Increments Current Question To Move To Next Object
    setQuestionNum(questionNum + 1)
  };

  // Checks If On Last Question
  const questionCount = () => {

    // Checks If Current Question Is Less Than Question Count
    if(questionNum > props.activity.questionCount){
      setQuestionNum(questionNum + 1)
    } else {
      return <Redirect to='/results' />
      
    }
  }

  // Wait Until Question Data Loads
  if(currentQuestion){

    // Render Component
    return (
      <div className="usStates">
        <p>Question {questionNum}</p>
        <h3>What State Is This?</h3>
        <p>{currentQuestion.link}</p>
        <Button action={() => correctOrNo(option1)}>

          <p>{option1}</p>

        </Button>
        <Button action={() => correctOrNo(option2)}>

          <p>{option2}</p>

        </Button>
        <Button action={() => correctOrNo(option3)}>

          <p>{option3}</p>

        </Button>
        <Button action={() => correctOrNo(option4)}
        >

          <p>{option4}</p>

        </Button>
        <button onClick={() => console.log(statesList)}>click pls</button>
      </div>
    );
  } else {
    return null
  }
};

// Map Error And Activity Props
const mapStateToProps = state => ({
  activity: state.activity
})

export default connect(mapStateToProps, { incrementScore })(USStates);
