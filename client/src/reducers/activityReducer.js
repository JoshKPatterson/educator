// Import Types

import { SET_ACTIVITY } from "../actions/types";

const initState = {
  activity: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    default:
      return state;
  }

}
