import React from "react";
import "./Skill.css";
import { useState, useEffect } from "react";
export default function ProgressBar(props) {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const percentage = [78, 70, 80];
  function generatePercent() {
    return Math.floor(Math.random() * percentage.length);
  }
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled(percentage[generatePercent()]), 50);
    }
  }, [filled, isRunning]);
  const handleClicked = () => {
    setIsRunning(true);
  };
  return (
    <section id="progress">
      <div className="bars">
        <div className="bar">
          <img
            src={props.project}
            alt=""
            className="progressbar-img"
            onClick={handleClicked}
          />
          <p className="progress-title">{props.title}</p>
          <div className="progressbar">
            <div
              style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "goldenrod",
                transition: "width 0.6s",
              }}
              className="progresspercent"
            >
              {filled}%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
