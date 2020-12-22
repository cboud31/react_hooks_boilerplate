import { useState } from 'react';

const useToggle = (initVal = false) => {
  // call useState, reserve a piece of state..
  const [state, setState] = useState(initVal);

  const toggle = () => {
    setState(!state);
  };
  // return a piece of state AND a function to toggle it.
  return [state, toggle];
};

export default useToggle;

// useToggle is a custom hook to toggle true/false (i.e. show a menu, check a box etc.)
// It uses a piece of state, and a built-in toggle function to set said state to true/false.
// See the example below for how it can be used.

/*
import React, { useState } from 'react';

import useToggle from './hooks/useToggle';

const Toggler = () => {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isCold, toggleIsCold] = useToggle(true);

  const toggle = () => {
    setIsHappy(!isHappy);
  };

  return (
    <>
      <h1 onClick={toggleIsHappy}>{isHappy ? '😄' : '😟'}</h1>
      <h1 onClick={toggleIsCold}>{isCold ? '🥶' : '🥵'}</h1>
    </>
  );
};

export default Toggler;
*/
