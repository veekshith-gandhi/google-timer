/** @format */

import { useEffect, useState } from "react";
import Button from "../timerbutton/Button";
import Display from "../timerdisplay/Display";
import "./timer.scss";
const Timer = () => {
  const [hour, setHour] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    var hourId = null;
    var minId = null;
    var secId = null;
    if (active) {
      secId = setInterval(() => {
        if (sec <= 0) {
          console.log(sec);
          setSec(0);
          clearInterval(secId);
        } else {
          setSec((prev) => prev - 1);
        }
      }, 1000);
      if (sec === 0 && min !== 0) {
        clearInterval(secId);
        minId = setInterval(() => {
          setMin((prev) => prev - 1);
          if (min === 0) {
            clearInterval(minId);
          } else {
            setSec(60);
          }
        }, 1000);
      }
      if (min === 0 && hour !== 0) {
        hourId = setInterval(() => {
          setHour((prev) => prev - 1);
          if (hour === 0) {
            clearInterval(hourId);
          } else {
            setMin(60);
          }
        }, 1000);
      }
      if (hour === 0) {
        clearInterval(hourId);
      }
      if (hour === 0 && min === 0 && sec === 0) {
        clearInterval(hourId);
        clearInterval(minId);
        clearInterval(secId);
      }
    } else {
      setActive(false);
      clearInterval(secId);
      clearInterval(minId);
      clearInterval(hourId);
    }

    return () => {
      clearInterval(secId);
      clearInterval(minId);
      clearInterval(hourId);
    };
  }, [hour, min, sec, active]);

  const payload = {
    hour,
    min,
    sec,
  };

  const callBack = (props) => {
    setHour(props.hour);
    setMin(props.min);
    setSec(props.sec);
  };

  const handleStart = () => {
    setActive(!active);
  };

  const reset = () => {
    setHour(0);
    setSec(0);
    setMin(0);
    setActive(false);
  };
  return (
    <div>
      <Display callBack={callBack} payload={payload} />
      <Button handleStart={handleStart} reset={reset} />
    </div>
  );
};

export default Timer;
