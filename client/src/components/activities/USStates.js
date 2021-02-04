// Import React
import React, { useState } from "react";

// Import Components

// Import Static Data
import { statesArr } from "../../utilities/staticData";

const USStates = () => {
  const [questionNum, setQuestionNum] = useState(0);

  const objConstructor = (state) => {
    let myObj = new Object();
    myObj.name = state;
    myObj.link = `https://educator-bucket.s3.amazonaws.com/us_states/${state.toLowerCase()}.jpg`;
    myObj.falseAnswers = new Array();
    while (myObj.falseAnswers.length < 3) {
      let randomIndex = Math.floor(Math.random() * 50);
      if (
        myObj.name !== statesArr[randomIndex] &&
        !myObj.falseAnswers.includes(statesArr[randomIndex])
      ) {
        myObj.falseAnswers.push(statesArr[randomIndex]);
      }
    }
    let answerOrder = [myObj.name].concat(myObj.falseAnswers);
    myObj.answerOrder = shuffle(answerOrder);
    return myObj;
  };

  const arrConstructor = () => {
    let objArr = new Array();
    statesArr.forEach((state) => {
      objArr.push(objConstructor(state));
    });
    return objArr;
  };

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

  const randomArr = shuffle(arrConstructor());
  let currentQuestion = randomArr[questionNum]

  return (
    <div className="usStates">
      <button onClick={() => console.log(randomArr)}>buton</button>
      <h3>What State Is This?</h3>
      <p>{currentQuestion.link}</p>
      <p>{currentQuestion.answerOrder[0]}</p>
      <p>{currentQuestion.answerOrder[1]}</p>
      <p>{currentQuestion.answerOrder[2]}</p>
      <p>{currentQuestion.answerOrder[3]}</p>
      <button onClick={() => setQuestionNum(questionNum + 1)}>next question</button>
    </div>
  );
};

export default USStates;
