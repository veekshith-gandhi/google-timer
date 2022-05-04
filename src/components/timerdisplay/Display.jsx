/** @format */

import { useState } from "react";
import "./timerdisplay.scss";
const Display = ({ callBack, payload }) => {
  const [hour, setHour] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const payloads = {
    hour,
    min,
    sec,
  };
  return (
    <div className="number-container">
      <input
        type="number"
        placeholder="0H"
        value={payload.hour}
        onChange={(e) => {
          setHour(+e.target.value);
          callBack(payloads);
        }}
      />
      <input
        type="number"
        placeholder="0M"
        value={payload.min}
        onChange={(e) => {
          setMin(+e.target.value);
          callBack(payloads);
        }}
      />
      <input
        type="number"
        placeholder="0S"
        value={payload.sec}
        onChange={(e) => {
          setSec(+e.target.value);
          callBack(payloads);
        }}
      />
    </div>
  );
};

export default Display;
