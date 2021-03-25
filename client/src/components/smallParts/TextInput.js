// Import React
import React from "react";

// Text Input Component
const TextInput = (props) => {
  return (
    <div className="textInput">
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      <label htmlFor={props.label}>
        {props.labelText}
      </label>
    </div>
  );
};

export default TextInput;
