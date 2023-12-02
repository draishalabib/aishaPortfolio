import React, { useState } from "react";
import "./Header.css";
import HeaderText from "./HeaderText";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scroll >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <header id="home">
      <div className={color ? "header header-bg" : "header"}>
        <h1>Portfolio</h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {props.Links.map(({ id, title, link }) => (
            <li className="links" key={id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
      <HeaderText />
    </header>
  );
}
