// Import React
import React from "react";

// Import Components

// Import Static Data
import { statesArr } from "../../utilities/staticData";

const USStates = () => {
  const objConstructor = (state) => {
    let myObj = new Object();
    myObj.name = state;
    myObj.link = `https://educator-bucket.s3.amazonaws.com/us_states/${state.toLowerCase()}.jpg`;
    myObj.falseAnswers = new Array();
    while (myObj.falseAnswers.length < 3) {
      let randomIndex = Math.floor(Math.random() * 9) + 1;
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

  return (
    <div className="usStates">
      <button onClick={() => console.log(randomArr)}>buton</button>
    </div>
  );
};

export default USStates;
