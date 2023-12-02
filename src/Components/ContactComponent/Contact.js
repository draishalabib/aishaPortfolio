import React from "react";
import "./Contact.css";
import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMapComponent/GoogleMap";
export default function Cantact() {
  return (
    <div id="contact">
      <h1>Contact Me 📲</h1>
      <ContactAddress />
      <ContactForm />
      <GoogleMap />
    </div>
  );
}
