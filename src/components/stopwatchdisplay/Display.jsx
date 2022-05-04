/** @format */

import "./stopdisplay.scss";
const Display = ({ stopwatch }) => {
  return (
    <div className="stopwatch-container">
      <span>{stopwatch.h < 10 ? "0" + stopwatch.h : stopwatch.h} :</span>
      <span>{stopwatch.m < 10 ? "0" + stopwatch.m : stopwatch.m} :</span>
      <span>{stopwatch.s < 10 ? "0" + stopwatch.s : stopwatch.s} :</span>
      <span>{stopwatch.ms < 10 ? "0" + stopwatch.ms : stopwatch.ms}</span>
    </div>
  );
};
export default Display;
