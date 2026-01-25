import { useState } from "react";

export default function ServiceCard({ icon, title, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="service-card"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`service-card-inner ${flipped ? "flipped" : ""}`}>

        <div className="service-card-front">
          <img src={icon} alt={title} className="service-icon" />
          <h3 className="service-heading">{title}</h3>
        </div>

        <div className="service-card-back">
          <img src={icon} alt={title} className="service-icon" />
          <h3 className="service-heading">{title}</h3>

          {flipped && (
            <p key={Date.now()} className="typewriter">
              {description}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
