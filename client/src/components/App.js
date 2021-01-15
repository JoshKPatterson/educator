// Import React
import React, { useEffect } from "react";

// Import Components
import MainMenu from "./sections/MainMenu/MainMenu";
import Math from "./sections/Math/Math";
import Geography from "./sections/Geography/Geography";
import Header from "./smallParts/Header/Header";
import Login from "./auth/Login/Login";
import Logout from "./auth/Logout/Logout";
import Register from "./auth/Register/Register";

import { useHistory } from "react-router-dom";


// Import Custom Hooks
import { requireAuth } from "../customHooks";

// Import Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import Redux
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/authActions";
import { connect } from "react-redux";

// Import Styles
import "./App.scss";

const App = (props) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  // const checkLogin = requireAuth(props.isAuthenticated);

  const requireAuth = (isAuthenticated) => {
    let history = useHistory();
    if(!isAuthenticated){
      history.push('/login')
    }
  }

  return (
    // <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={MainMenu}
            onEnter={requireAuth(props.isAuthenticated)}
          />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/math" component={Math} />
          <Route path="/geography" component={Geography} />
        </Switch>
      </Router>
    </div>
    // </Provider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
