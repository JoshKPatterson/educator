// Import React
import React, { useState, useEffect } from "react";

// Import Redux
import { connect } from "react-redux";
import { incrementScore } from "../../actions/activityActions";

// Import Routing
import { Redirect } from "react-router-dom";

// Import Components
import Button from "../smallParts/Button";
import ButtonContainer from "../smallParts/ButtonContainer";

// Import Custom Hooks
import { shuffle } from "../../customHooks";

// Division Activity Component
const Division = (props) => {
  // State Setup
  const [questionNum, setQuestionNum] = useState(0);
  const [questionList, setQuestionList] = useState(null);

  // Create Randomized Object For Question
  const objConstructor = () => {
    // Create Object
    let obj = {};

    // Set Values For Question
    // obj.value1 Is The Dividend, obj.value2 Is The Divisor
    obj.answer = Math.floor(Math.random() * 12) + 1;
    obj.value2 = Math.floor(Math.random() * 12) + 1;
    obj.value1 = obj.answer * obj.value2;

    // Create Empty Array To Populate With Wrong Answers
    obj.falseAnswers = [];

    // Check If Array Is Full (3)
    while (obj.falseAnswers.length < 3) {
      // Select Random Times Table Number
      let randomNum = Math.floor(Math.random() * 12) + 1;

      // If Num Is Not Answer And Not In Array
      if (obj.answer !== randomNum && !obj.falseAnswers.includes(randomNum)) {
        obj.falseAnswers.push(randomNum);
      }
    }

    // Combine False Answers With Correct Answer Into Array
    let options = [obj.answer].concat(obj.falseAnswers);

    // Shuffle Order Of Possible Answers
    obj.options = shuffle(options);

    // Return Object
    return obj;
  };

  // Create 10 Objects Within Questions Array
  const arrConstructor = () => {
    // Initialize Empty Array
    let arr = [];

    // Run objConstructor 10 Times To Make 10 Questions
    for (let i = 0; i < props.activity.questionCount; i++) {
      let newObj = objConstructor();
      arr.push(newObj);
    }

    // Return Populated Array
    return arr;
  };

  // Create Randomized Array Of Objects And Update It To State
  useEffect(() => {
    const questionsArr = shuffle(arrConstructor());
    setQuestionList(questionsArr);
  }, []);

  // Initialize Dynamic Values To Be Recycled For Questions
  let currentQuestion, option1, option2, option3, option4;

  // Wait Until State Updates Before Updating currentQuestion
  if (questionList) {
    if (questionList[questionNum]) {
      currentQuestion = questionList[questionNum];
      [option1, option2, option3, option4] = currentQuestion.options;
    } else {
      return <Redirect to="/results" />;
    }
  }

  // Checks If Answer Is Correct
  const onAnswer = (question) => {
    if (question === currentQuestion.answer) {
      // Updates Score In Redux Store
      props.incrementScore();
    }

    // Increments Current Question To Move To Next Object
    setQuestionNum(questionNum + 1);
  };
  if (currentQuestion) {
    return (
      <div className="division activity">
        <h2 className="question__num">
          <span className="question__span">{questionNum + 1}/{questionList.length}</span>
        </h2>
        <h1>
          {currentQuestion.value1} ÷ {currentQuestion.value2}
        </h1>
        <ButtonContainer>
          <Button customClass="answer__button" action={() => onAnswer(option1)}>
            <p>{option1}</p>
          </Button>
          <Button customClass="answer__button" action={() => onAnswer(option2)}>
            <p>{option2}</p>
          </Button>
          <Button customClass="answer__button" action={() => onAnswer(option3)}>
            <p>{option3}</p>
          </Button>
          <Button customClass="answer__button" action={() => onAnswer(option4)}>
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

export default connect(mapStateToProps, { incrementScore })(Division);
