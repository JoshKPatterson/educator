// Import React
import { React, useEffect, useRef } from "react";

// Used To Cache Previous Error For Future Comparison
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

// Used To Redirect To Main Menu If Logged In
export const authCheck = (redirect, target, bypass) => {
  switch (redirect) {
    case true:
      return target;
    case false:
      return bypass;
    case null:
    default:
      return null;
  }
};

// Shuffle Function (Fisher-Yates Algorithm)
export const shuffle = array => {
  let newArr = [...array];
  let m = newArr.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = newArr[m];
    newArr[m] = newArr[i];
    newArr[i] = t;
  }
  return newArr;
}
