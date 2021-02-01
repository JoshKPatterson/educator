// Import Types

import { SET_ACTIVITY } from "../actions/types";

const initState = {
  activityName: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_ACTIVITY:
      return {
        ...state,
        activityName: action.payload,
      };
    default:
      return state;
  }
}
