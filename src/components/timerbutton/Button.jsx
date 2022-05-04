/** @format */

import { useState } from "react";
import "./timerbutton.scss";

const Button = ({ handleStart, reset }) => {
  const [toggleStart, setToggleStart] = useState(true);
  return (
    <div className="button-container">
      {toggleStart ? (
        <button
          onClick={() => {
            handleStart();
            setToggleStart(false);
          }}
          className="start"
        >
          START
        </button>
      ) : (
        <button
          onClick={() => {
            handleStart();
            setToggleStart(true);
          }}
          className="stop"
        >
          STOP
        </button>
      )}
      <button onClick={() => reset()} className="reset">
        RESET
      </button>
    </div>
  );
};

export default Button;
