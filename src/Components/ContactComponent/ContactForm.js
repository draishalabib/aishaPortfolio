import React from "react";

export default function ContactForm() {
  return (
    <div>
      <form className="contact-form">
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="your message"
        ></textarea>
        <button type="submit" value="Send" className="btn">
          submit
        </button>
      </form>
    </div>
  );
}
