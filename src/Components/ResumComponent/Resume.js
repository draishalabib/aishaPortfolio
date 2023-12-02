import "./Resum.css";
import React, { useState } from "react";
export default function Resume() {
  const [showDetailes, setDedailes] = useState(false);
  const buttonClicked = () => {
    setDedailes(!showDetailes);
  };
  return (
    <div id="resume">
      <div className="resume-nav ">
        <div class="row education ">
          <div class="three columns ">
            <h1>
              <strong>Education</strong>
            </h1>
          </div>
          <div class="nine columns ">
            <div class="row item">
              <div class="twelve columns  p-md-5">
                <h3>University of Life</h3>
                <h2 class="info">
                  Master in MD <span>&bull;</span>
                  <em class="date">April 2023</em>
                </h2>

                <p>
                  starting life in medical University has been anexciting event
                  in my life ,but may also be a dauting one,even if i'm not a
                  fresher anymore,absolutley i'll probably faced with new
                  challenges.
                </p>

                <button className="btn" onClick={buttonClicked}>
                  {showDetailes ? "Hide Detailes" : "More Details"}
                </button>
              </div>
            </div>

            {showDetailes ? (
              <div class="row item">
                <div class="twelve columns p-md-5">
                  <h3>Academy of Code To Inspire</h3>
                  <p class="info">
                    A. Degree in Web-Devolaper <span>&bull;</span>
                    <em class="date">Oct 2022</em>
                  </p>
                  <p>
                    I've strated Coding Classes with enthusiasm,and the more i
                    learned about code i became more excited,it's an extensive
                    world that you can draw your dream.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
