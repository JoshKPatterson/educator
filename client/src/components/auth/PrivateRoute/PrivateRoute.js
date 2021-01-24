// Import React
import React from 'react';

// Import Routing
import { Route, Redirect } from "react-router-dom";

// Import Redux
import { connect } from "react-redux";

// Private Route Component
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (

  // Render Route If Statement
  <Route {...rest} render={props => (
    isAuthenticated

    // Render If Authenticated
    ? <Component {...props} />
    
    // Redirect If Not Authenticated
    : <Redirect to='/login'/>
  )} />  
)

// Map Auth Prop
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute)