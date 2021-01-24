// Import React
import React from "react";
import "./Button.scss";

const Button = ({ children, action }) => {
  return <button onClick={action} className="buttonProp">{children}</button>;
};

export default Button;
