// Import Redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import Reducers
import rootReducer from './reducers'

// Create Initial State
const initState = {};

// Define Middleware
const middleware = [thunk];

// Create Store
const store = createStore(rootReducer, initState, compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;