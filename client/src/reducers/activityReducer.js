// Import Types

import {
  SET_ACTIVITY,
  INCREMENT_SCORE,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  CLEAR_ACTIVITY,
} from "../actions/types";

const initState = {
  activityName: null,
  genre: null,
  score: null,
  questionCount: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_ACTIVITY:
      return {
        ...state,
        activityName: action.payload.name,
        genre: action.payload.genre,
        questionCount: action.payload.questionCount,
        score: 0,
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case UPDATE_SUCCESS:
      console.log("update success");
      return {
        ...state
      }
    case UPDATE_FAIL:
      console.log("update fail");
      return {
        ...state
      }
    case CLEAR_ACTIVITY:
      return {
        ...state,
        activityName: null,
        genre: null,
        score: null,
        questionCount: null,
      };
    default:
      return state;
  }
}
