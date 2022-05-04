/** @format */

import { useState } from "react";
import "./stopwatchbutton.scss";

const Button = ({ start, stop, reset }) => {
  const [toggleStart, setToggleStart] = useState(true);
  return (
    <div className="button-container">
      {toggleStart ? (
        <button
          onClick={() => {
            start();
            setToggleStart(false);
          }}
          className="start"
        >
          START
        </button>
      ) : (
        <button
          onClick={() => {
            stop();
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
