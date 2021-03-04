// Import React
import React from "react";

// Import Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import Components
import Button from "./Button";

const ReturnToMenu = () => {
  return (
    <div className='returnToMenu__container'>
      <Button className="returnToMenu__button">
        <Link to='/'>Return To Menu</Link>
      </Button>
    </div>
  );
};

export default ReturnToMenu;
