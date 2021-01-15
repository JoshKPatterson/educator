import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
// import PLACEHOLDER from 'redux';

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
});
