// Import REact
import React from 'react';
import ReactDOM from 'react-dom';

// Import Routing
import { BrowserRouter } from 'react-router-dom';

// Import Components
import App from './components/App';

// Import Styling
import './index.scss'

// Impot Redux
import store from "./store";
import { Provider } from "react-redux";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);