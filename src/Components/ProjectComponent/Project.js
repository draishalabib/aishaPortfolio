import React, { useState } from "react";
import { FaSearch, FaGithub } from "react-icons/fa";
import "./Project.css";
import StarRating from "./StartRatingComponent/StarRating";
export default function Project(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleClicked = () => {};
  return (
    <div id="project">
      <div className="searchinput">
        <FaSearch id="icon" />
        <input
          id="searchinput"
          type="text"
          placeholder=" type to search...."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <h1>My Projects! </h1>
      <span>
        🔷 here are some of Projects that I 've done by using
        HTML,Css,Bootstarp,react & JavaScript
      </span>

      <div className="tamplate-container">
        {props.deta
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div className="project-tamplate">
                <h6>{val.name}</h6>
                <div className="tamplate" key={val.id}>
                  <img src={val.image} alt="" onClick={handleClicked} />
                </div>
                <div>
                  <div className="tamplate-buttom">
                    <FaGithub className="iconlinks">{val.adress}</FaGithub>
                  </div>
                  <div id="tamplate-text">
                    <p>{val.title}</p>
                  </div>
                  <StarRating />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
