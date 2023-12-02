import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Header.css";
import image from "../../images/aisha.jpg";
export default function HeaderText() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer ", "UI Designer ", "Expert Coder "],
    Loop: false,
    typeSpeed: 70,
    deLeteSpeed: 10,
    deLaySpeed: 2000,
  });
  return (
    <div id="banner">
      <div className="banner-image">
        <img src={image} alt="bachground-image" />
      </div>
      <div className="banner-text">
        <h1>
          Hi, I'm <span>Aisha Labib </span>
        </h1>
        <h2>
          a {text}
          <Cursor
            cursorBlinking="false"
            cursorStyle="...\"
            cursorColor="#ffca46dc"
          />
        </h2>
        <p className="text">
          i'm not adding Codes just to build sites ,i work to make yuor dreams
          come true.
        </p>
      </div>
      <div className="container">
        <Link to="map" className="btn">
          contact me
        </Link>
        <h4 className="find">Find Me In</h4>

        <div className="banner-icon">
          <a href="https://twitter.com" style={{ color: "blue" }}>
            <FaTwitter className="icon" />
          </a>
          <a href="https://instagram.com" style={{ color: "red" }}>
            <FaInstagram className="icon" />
          </a>
          <a href="https://whatsup.com" style={{ color: "chartreuse" }}>
            <FaWhatsapp className="icon" />
          </a>
          <a href="https://github.com" style={{ color: "blueviolet" }}>
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
      <div className="logo">
        <span>{` <  /  >`}</span>
      </div>
    </div>
  );
}
