import React from "react";
import { FaPhone, FaMailBulk, FaHome } from "react-icons/fa";

export default function ContactAddress() {
  return (
    <div id="contact-adress">
      <p>
        <FaHome className="icon" style={{ color: "white" }} />{" "}
        <span>
          <strong> Company name : </strong> Code to inspire _ Herat City
        </span>
      </p>
      <a href="mailto:draishalabib522@gmail.com" class="mail">
        <FaMailBulk className="icon" style={{ color: "white" }} />
        Codetoinspire@gmail.com
      </a>

      <a href="mailto:draishalabib522@gmail.com" class="mail">
        <FaMailBulk className="icon" style={{ color: "white" }} />
        draishalabib522@gmail.com
      </a>
      <a href="tel:(+93)797182936" class="phone">
        <FaPhone className="icon" style={{ color: "white" }} />
        (93) 797182936
      </a>
    </div>
  );
}
