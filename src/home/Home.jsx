/** @format */
import { useState } from "react";
import "./home.scss";

const Home = () => {
  const [underline, setUnderline] = useState(false);
  const [toggleStart, setToggleStart] = useState(true);
  return (
    <div className="home-container">
      <div className="label-container">
        <span
          onClick={() => setUnderline(true)}
          className={underline ? "timer underline" : "timer"}
        >
          TIMER
        </span>
        <span
          onClick={() => setUnderline(false)}
          className={!underline ? "underline" : ""}
        >
          STOPWATCH
        </span>
      </div>
      {underline ? (
        <div className="number-container">
          <span>0</span>
          <span>0</span>
          <span>h</span>
          <span>0</span>
          <span>0</span>
          <span>m</span>
          <span>0</span>
          <span>0</span>
          <span>s</span>
        </div>
      ) : (
        <div className="stopwatch-container">
          <span>0</span>
          <span>s</span>
          <span>0</span>
          <span>0</span>
        </div>
      )}
      <div className="button-container">
        {toggleStart ? (
          <button onClick={() => setToggleStart(false)} className="start">
            START
          </button>
        ) : (
          <button onClick={() => setToggleStart(true)} className="stop">
            STOP
          </button>
        )}
        <button className="reset">RESET</button>
      </div>
    </div>
  );
};

export default Home;
