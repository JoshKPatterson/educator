// Import React
import React from "react";

const Button = ({ children, action, customClass = "" }) => {
  const mouseDown = function (e) {
    e.currentTarget.blur();
  };
  return (
    <button
      onMouseDown={mouseDown}
      onClick={action}
      className={`buttonProp ${customClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
