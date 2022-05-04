/** @format */

import { useEffect, useState } from "react";
import Button from "../stopwatchbutton/Button";
import Display from "../stopwatchdisplay/Display";
import "./stopwatch.scss";

const Stopwatch = () => {
  const [stopwatch, setStopwatch] = useState({ ms: 0, h: 0, m: 0, s: 0 });
  const [intervalId, setIntervalId] = useState(null);

  let updatedms = stopwatch.ms;
  let updateds = stopwatch.s;
  let updatedh = stopwatch.h;
  let updatedm = stopwatch.m;

  useEffect(() => {
    console.log("called");
    return () => {
      console.log("cleaned");
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const start = () => {
    setIntervalId(setInterval(run, 10));
  };
  const stop = () => {
    clearInterval(intervalId);
  };
  const reset = () => {
    stop();
    setStopwatch({ ms: 0, h: 0, m: 0, s: 0 });
  };
  const run = () => {
    if (updatedm === 60) {
      updatedh++;
      updatedm = 0;
    }
    if (updateds === 60) {
      updatedm++;
      updateds = 0;
    }
    if (updatedms === 100) {
      updateds++;
      updatedms = 0;
    }
    updatedms++;
    return setStopwatch({
      ms: updatedms,
      h: updatedh,
      m: updatedm,
      s: updateds,
    });
  };
  // run();
  return (
    <div>
      <Display stopwatch={stopwatch} />
      <Button start={start} stop={stop} reset={reset} />
    </div>
  );
};
export default Stopwatch;
