import React from 'react';
import MainMenu from './sections/MainMenu/MainMenu';
import Math from './sections/Math/Math';
import Geography from './sections/Geography/Geography';
import Header from './smallParts/Header/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.scss'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/math'>
            <Math />
          </Route>
          <Route path='/geography'>
            <Geography />
          </Route>
          <Route path='/'>
            <MainMenu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
