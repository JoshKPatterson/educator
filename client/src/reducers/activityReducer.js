// Import Types

import {
   SET_ACTIVITY,
   INCREMENT_SCORE
  } from "../actions/types";

const initState = {
  activityName: null,
  score: null,
  questionCount: null
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_ACTIVITY:
      return {
        ...state,
        activityName: action.payload.name,
        questionCount: action.payload.questionCount,
        score: 0
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1
      }
    default:
      return state;
  }
}
