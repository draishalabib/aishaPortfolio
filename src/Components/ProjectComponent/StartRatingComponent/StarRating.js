import React from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

export default function StarRating() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    // setOverValue(undefined);
  };
  return (
    <div id="Star-container">
      {stars.map((_, index) => {
        return (
          <div className="star">
            <FaStar
              key={index}
              size={20}
              style={{ marginRight: 8, cursor: "pointer" }}
              color={(hoverValue || currentValue) > index ? "orange" : "gray"}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        );
      })}
    </div>
  );
}
