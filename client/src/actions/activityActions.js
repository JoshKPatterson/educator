// Import Types
import {
  SET_ACTIVITY,
  INCREMENT_SCORE
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