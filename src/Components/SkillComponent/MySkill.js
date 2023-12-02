import React from "react";
import "./Skill.css";

import ProgressBar from "./ProgressBar";
export default function MySkill(props) {
  return (
    <div id="skill">
      <h1> My Skills👩🏿‍💻!</h1>
      <p>
        🕳To know my Development skills in each section,click on the
        corresponding image.
      </p>
      {props.item.map((i) => {
        return (
          <ProgressBar
            project={i.project}
            title={i.title}
            percentage={i.percentage}
          />
        );
      })}
    </div>
  );
}
