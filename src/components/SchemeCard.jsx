import React from "react";
import "../styles/components.css";

export default function SchemeCard({ scheme }) {
  return (
    <div className="scheme-card">
      <div className="scheme-header">
        <h3>{scheme.name}</h3>
        <span className="scheme-category">{scheme.category}</span>
      </div>

      <p className="scheme-description">{scheme.description}</p>

      {scheme.benefit && (
        <div className="scheme-benefit">
          <strong>💰 Benefit:</strong>
          <p>{scheme.benefit}</p>
        </div>
      )}

      <div className="scheme-eligibility">
        <strong>📋 Eligibility:</strong>
        <p>{scheme.eligibility}</p>
      </div>

      <button className="btn-secondary">Read More</button>
    </div>
  );
}
