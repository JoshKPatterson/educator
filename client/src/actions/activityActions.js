// Import Libraries
import axios from 'axios'

// Import Actions
import { tokenConfig} from './authActions'

// Import Types
import {
  SET_ACTIVITY,
  INCREMENT_SCORE,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  CLEAR_ACTIVITY
} from './types'

// Actions

// Sets Activity
export const setActivity = activity => {
  return ({
    type: SET_ACTIVITY,
    payload: activity
  })
}

// Increment Score
export const incrementScore = () => {
  return({
    type: INCREMENT_SCORE
  })
}

// Update User Stats After Activity
export const updateUserData = ({ genre, score, id }) => (dispatch, getState) => {

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  // Request Body
  const body = JSON.stringify({ genre, score, id });

  axios
    .post("/api/data", body, tokenConfig(getState))
    .then(() => 
      dispatch({
        type: UPDATE_SUCCESS
      })
    )
    .catch(() => 
      dispatch({
        type: UPDATE_FAIL
      })
    )
}

// Clear All Stats Of Activity
export const clearActivity = () => {
  return ({
    type: CLEAR_ACTIVITY
  });
}