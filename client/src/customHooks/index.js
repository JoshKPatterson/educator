import { useEffect, useRef } from "react";

import { useHistory } from "react-router-dom";



export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const requireAuth = (isAuthenticated) => {
  let history = useHistory();
  if(!isAuthenticated){
    history.push('/login')
  }
}