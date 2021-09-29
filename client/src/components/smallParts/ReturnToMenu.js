// Import React
import React from "react";

// Import Routing
import { Link } from "react-router-dom";

// Import Components
import Button from "./Button";

const ReturnToMenu = ({action}) => {
  return (
    <div className='returnToMenu__container'>
      <Button className="returnToMenu__button" action={action}>
        <Link to='/'>Return To Menu</Link>
      </Button>
    </div>
  );
};

export default ReturnToMenu;
