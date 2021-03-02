// Import React
import React from "react";
import "./Button.scss";

const Button = ({ children, action, customClass }) => {
  return <button onClick={action} className={`buttonProp ${customClass ? customClass : ''}`}>{children}</button>;
};

export default Button;
