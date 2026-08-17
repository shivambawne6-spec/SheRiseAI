import React from "react";
import "../styles/components.css";

export default function EmergencyCard({ contact }) {
  const handleCall = () => {
    alert(`Calling ${contact.title}: ${contact.number}`);
  };

  return (
    <div className="emergency-card">
      <div className="emergency-icon">{contact.icon}</div>
      <h3>{contact.title}</h3>
      <p className="emergency-number">{contact.number}</p>
      <p className="emergency-desc">{contact.description}</p>
      <button className="btn-emergency" onClick={handleCall}>
        Call Now
      </button>
    </div>
  );
}
