// Import Types
import {
  SET_ACTIVITY
} from './types'

// Actions

// Sets Activity
export const setActivity = activity => {
  return ({
    type: SET_ACTIVITY,
    payload: activity
  })
}