import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [hour, setHour] = useState("00");
  let seconds = 0;
  const timerId = useRef();

  const timer = () => {
    seconds++;
    setHour(Math.floor(seconds / 3600));
    setMinute(Math.floor((seconds - hour * 3600) / 60));
    setSecond(seconds % 60);
  };

  const handleStart = () => {
    if (timerId.current) throw new Error("error");
    timerId.current = setInterval(timer, 1000);
    console.log("start", timerId.current);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("stop", timerId.current);
  };
  const handleReset = () => {
    handleStop();
    seconds = 0;
    setMinute(0);
    setSecond(0);
    setHour(0);
    timerId.current = null;
  };
  // console.log(`0${second}`);
  return (
    <>
      <div className="App container">
        <h1>Coder Timer</h1>
        <div className="watch">
          <div className="time">
            <p>
              {`0${hour}`.slice(-2)}:{`0${minute}`.slice(-2)}:
              {`0${second}`.slice(-2)}
            </p>
          </div>
          <div className="controller">
            <button className="start" onClick={handleStart}>
              START
            </button>
            <button className="stop" onClick={handleStop}>
              STOP
            </button>
            <button className="reset" onClick={handleReset}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
