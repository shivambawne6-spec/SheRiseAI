import React, { useState } from "react";
import EmergencyCard from "../components/EmergencyCard";
import TrustedContactForm from "../components/TrustedContactForm";
import "../styles/pages.css";

export default function Contacts() {
  const [trustedContacts, setTrustedContacts] = useState([]);

  const emergencyContacts = [
    {
      id: 1,
      title: "Police",
      number: "112",
      description: "Emergency police assistance",
      icon: "🚔",
    },
    {
      id: 2,
      title: "Women Helpline",
      number: "181",
      description: "24/7 women support and assistance",
      icon: "📞",
    },
    {
      id: 3,
      title: "Ambulance",
      number: "108",
      description: "Medical emergency service",
      icon: "🚑",
    },
    {
      id: 4,
      title: "Childline",
      number: "1098",
      description: "Child abuse and exploitation helpline",
      icon: "🆘",
    },
  ];

  const handleAddContact = (contact) => {
    setTrustedContacts([...trustedContacts, { ...contact, id: Date.now() }]);
  };

  const handleRemoveContact = (id) => {
    setTrustedContacts(trustedContacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Safety & Contacts</h1>
        <p>Quick access to emergency contacts and trusted numbers</p>
      </div>

      <div className="contacts-wrapper">
        <div className="emergency-section">
          <h2>🚨 Emergency Contacts</h2>
          <div className="emergency-grid">
            {emergencyContacts.map((contact) => (
              <EmergencyCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>

        <div className="trusted-section">
          <h2>💙 Trusted Contacts</h2>
          <TrustedContactForm onAddContact={handleAddContact} />

          {trustedContacts.length > 0 && (
            <div className="trusted-grid">
              {trustedContacts.map((contact) => (
                <div key={contact.id} className="trusted-card">
                  <div className="trusted-info">
                    <h3>{contact.name}</h3>
                    <p>{contact.number}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveContact(contact.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
