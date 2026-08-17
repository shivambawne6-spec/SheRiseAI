import React, { useState } from "react";
import "../styles/components.css";

export default function TrustedContactForm({ onAddContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && number) {
      onAddContact({ name, number });
      setName("");
      setNumber("");
    }
  };

  return (
    <form className="trusted-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            placeholder="Contact Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-add">
          Add Contact
        </button>
      </div>
    </form>
  );
}
