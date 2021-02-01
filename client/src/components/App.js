// Import React
import React, { useEffect } from "react";

// Import Components
import PrivateRoute from "./auth/PrivateRoute/PrivateRoute";
import MainMenu from "./sections/MainMenu/MainMenu";
import Math from "./sections/Math/Math";
import Geography from "./sections/Geography/Geography";
import Header from "./smallParts/Header/Header";
import Login from "./auth/Login/Login";
import Logout from "./auth/Logout/Logout";
import Register from "./auth/Register/Register";
import SectionNavigator from "./sections/SectionNavigator/SectionNavigator";
import Profile from "./sections/Profile/Profile";
import Activity from "./sections/Activity/Activity";

// Import Custom Hooks
import { requireAuth } from "../customHooks";

// Import Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import Redux
import store from "../store";
import { loadUser } from "../actions/authActions";
import { connect } from "react-redux";

// Import Styles
import "./App.scss";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Auth Routes */}
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          {/* Main Routes */}
          <PrivateRoute exact path="/" component={MainMenu} />
          <PrivateRoute path="/math" component={Math} />
          <PrivateRoute path="/geography" component={Geography} />
          <PrivateRoute path="/sections" component={SectionNavigator} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/activity" component={Activity} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
