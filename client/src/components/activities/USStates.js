// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { incrementScore } from "../../actions/activityActions";

// Import Routing
import { Redirect, Link } from "react-router-dom";

// Import Components
import Button from "../smallParts/Button";
import ButtonContainer from "../smallParts/ButtonContainer";

// Import Custom Hooks
import { shuffle } from "../../customHooks";

// Import Static Data
import { statesArr } from "../../utilities/staticData";

// US States Activity Component
const USStates = (props) => {
  // State Setup
  const [questionNum, setQuestionNum] = useState(0);
  const [questionList, setQuestionList] = useState(null);

  // Randomize States Array
  const randomStatesArr = shuffle(statesArr)

  // Turn State String Into Object
  const objConstructor = (state) => {
    // Create Object
    let obj = {};

    // Set Name And Link
    obj.name = state;
    obj.link = `https://educator-bucket.s3.amazonaws.com/us_states/${state
      .replace(/ /g, "_")
      .toLowerCase()}.jpg`;

    // Create Empty Array To Populate With Wrong Answers
    obj.falseAnswers = [];

    // Check If Array Is Full (3)
    while (obj.falseAnswers.length < 3) {
      // Select Random Number Between 0 and 50
      let randomIndex = Math.floor(Math.random() * 50);
      if (
        // If State At Random Index Is Not Selected State And Not In Array
        obj.name !== statesArr[randomIndex] &&
        !obj.falseAnswers.includes(statesArr[randomIndex])
      ) {
        obj.falseAnswers.push(statesArr[randomIndex]);
      }
    }

    // Combine False Answers With Correct Answer Into Aray
    let answerOrder = [obj.name].concat(obj.falseAnswers);

    // Shuffle Order Of Possible Answers
    obj.answerOrder = shuffle(answerOrder);

    // Return Object
    return obj;
  };

  // Iterate Over Randomized Array Of States To Make Array Of Objects
  const arrConstructor = () => {
    // Initialize Empty Array
    let arr = [];

    // Iterate Over States Array, Call Function On Each Entry
    // statesArr.forEach((state) => {
    //   objArr.push(objConstructor(state));
    // });

    for (let i = 0; i < props.activity.questionCount; i++){
      let newObj = objConstructor(randomStatesArr[i]);
      arr.push(newObj)
    }


    // Return Populated Array
    return arr;
  };

  // // Shuffle Function (Fisher-Yates Algorithm)
  // const shuffle = (array) => {
  //   let newArr = [...array];
  //   let m = newArr.length,
  //     t,
  //     i;
  //   while (m) {
  //     i = Math.floor(Math.random() * m--);
  //     t = newArr[m];
  //     newArr[m] = newArr[i];
  //     newArr[i] = t;
  //   }
  //   return newArr;
  // };

  // Create Randomized Array Of Objects And Update It To State
  useEffect(() => {
    const randomArr = shuffle(arrConstructor());
    setQuestionList(randomArr);
  }, []);

  // Initialize Dynamic Values To Be Recycled For Questions
  let currentQuestion, option1, option2, option3, option4;

  // Wait Until State Updates Before Updating currentQuestion
  if (questionList) {
    if (questionList[questionNum]) {
      currentQuestion = questionList[questionNum];
      [option1, option2, option3, option4] = currentQuestion.answerOrder;
    } else {
      return <Redirect to="/results" />;
    }
  }

  // Checks If Answer Is Correct
  const onAnswer = (question) => {
    if (question === currentQuestion.name) {
      // Action To Redux Store To Update Score
      props.incrementScore();
    }

    // Increments Current Question To Move To Next Object
    setQuestionNum(questionNum + 1);
  };

  // Wait Until Question Data Loads
  if (currentQuestion) {
    // Render Component
    return (
      <div className="usStates activity">
        <h2 className="states__question__num">
          <span className="question__span">
            {questionNum + 1}/{questionList.length}
          </span>
        </h2>
        <img src={currentQuestion.link} />
        <ButtonContainer>
          <Button
            customClass="states__answer__button"
            action={() => onAnswer(option1)}
          >
            <p>{option1}</p>
          </Button>
          <Button
            customClass="states__answer__button"
            action={() => onAnswer(option2)}
          >
            <p>{option2}</p>
          </Button>
          <Button
            customClass="states__answer__button"
            action={() => onAnswer(option3)}
          >
            <p>{option3}</p>
          </Button>
          <Button
            customClass="states__answer__button"
            action={() => onAnswer(option4)}
          >
            <p>{option4}</p>
          </Button>
        </ButtonContainer>
      </div>
    );
  } else {
    return null;
  }
};

// Map Activity Prop
const mapStateToProps = (state) => ({
  activity: state.activity,
});

export default connect(mapStateToProps, { incrementScore })(USStates);
