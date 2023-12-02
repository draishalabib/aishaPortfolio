import React from "react";
import "./Footer.css";
import { FaInstagram, FaWhatsapp, FaTwitter, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <a href="https://twitter.com">
          <FaTwitter
            className="icon-link"
            style={{ color: "blue" }}
          ></FaTwitter>
        </a>
        <a href="https://whatsapp.com">
          <FaWhatsapp
            className="icon-link"
            style={{ color: "chartreuse" }}
          ></FaWhatsapp>
        </a>
        <a href="https://instagram.com">
          <FaInstagram
            className="icon-link"
            style={{ color: "red" }}
          ></FaInstagram>
        </a>
        <a href="https://github.com">
          <FaGithub
            className="icon-link"
            style={{ color: "darkmagenta" }}
          ></FaGithub>
        </a>
      </div>

      <p class="copyright">
        <span>&copy; Copyright 2023 Code to inspire</span>
        <span>Design by</span>Aisha Labib
      </p>
    </footer>
  );
}
