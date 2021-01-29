// Import Redux
import { combineReducers } from "redux";

// Import Reduxers
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import activityReducer from './activityReducer';
// import PLACEHOLDER from 'redux';

// Combine & Export Reducers
export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  activity: activityReducer
});
