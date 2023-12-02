import { FaMapMarker } from "react-icons/fa";
import "./GoogleMap.css";
export default function GoogleMap() {
  return (
    <div id="map">
      <div className="text">
        <h2>🔍 find our adress in Google-Map</h2>
        <span>
          <FaMapMarker style={{ color: "blue" }} />
        </span>
      </div>
      <iframe
        id="frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6587.16047671
         9588!2d62.21246480985255!3d34.361159748814586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!
          4f13.1!3m3!1m2!1s0x3f3ce6f3ab0c9bbf%3A0x492c827591001f7e!2z2KjYp9i6INii2LLYp9iv24z
         YjCDZh9ix2KfYqtiMINin2YHYutin2YbYs9iq2
         KfZhg!5e0!3m2!1sfa!2s!4v1700592067139!5m2!1sfa!2s"
        width="1300"
        height="300"
        style={{ border: "0", border_radius: "50%" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
