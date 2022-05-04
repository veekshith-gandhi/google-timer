/** @format */
import { useState } from "react";
import Stopwatch from "../components/stopwatch/Stopwatch";
import Timer from "../components/timer/Timer";
import "./home.scss";

const Home = () => {
  const [underline, setUnderline] = useState(false);

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
      {underline ? <Timer /> : <Stopwatch />}
    </div>
  );
};

export default Home;
