import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/safety.css";

const STORAGE_KEY = "sherise_sos_contact";

const emergencyNumbers = [
  {
    title: "Emergency Response",
    number: "112",
    description: "Police, fire and ambulance emergency support",
    icon: "🚨",
  },
  {
    title: "Women Helpline",
    number: "181",
    description: "Government women helpline and support",
    icon: "👩",
  },
  {
    title: "Child Helpline",
    number: "1098",
    description: "For children in distress or danger",
    icon: "🧒",
  },
];

export default function Safety() {
  const [contact, setContact] = useState({ name: "", number: "" });
  const [location, setLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState("Not shared yet");
  const [sosActive, setSosActive] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved?.name || saved?.number) setContact(saved);
    } catch {
      // Ignore invalid local storage data.
    }
  }, []);

  const saveContact = (event) => {
    event.preventDefault();
    if (!contact.number.trim()) {
      setMessage("Please enter a phone number first.");
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contact));
    setMessage("Trusted SOS contact saved on this device.");
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Location is not supported by this browser.");
      return;
    }

    setLocationStatus("Getting your location…");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        const data = { latitude, longitude, accuracy };
        setLocation(data);
        setLocationStatus(`Location ready (±${Math.round(accuracy)} m)`);
      },
      () => setLocationStatus("Location permission was denied or unavailable."),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const locationText = location
    ? `I may need help. My current location is https://maps.google.com/?q=${location.latitude},${location.longitude}`
    : "I may need help. Please contact me and help me reach a safe place.";

  const shareLocation = async () => {
    if (!location) {
      getLocation();
      setMessage("Allow location access, then tap Share My Location again.");
      return;
    }

    try {
      if (navigator.share) {
        await navigator.share({ title: "SheRise SOS", text: locationText });
        setMessage("Location sharing opened.");
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(locationText);
        setMessage("SOS message copied. Paste it into SMS or WhatsApp.");
      } else {
        setMessage("Copy the location message below and send it to someone you trust.");
      }
    } catch {
      setMessage("Sharing was cancelled. You can still use the emergency call buttons.");
    }
  };

  const activateSOS = () => {
    setSosActive(true);
    setMessage("SOS ready. Use 112 for immediate emergency assistance, or contact someone you trust.");
    getLocation();
  };

  const callContact = () => {
    if (!contact.number.trim()) {
      setMessage("Add a trusted contact number first.");
      return;
    }
    window.location.href = `tel:${contact.number.replace(/[^+\d]/g, "")}`;
  };

  return (
    <main className="sos-page">
      <section className="sos-hero">
        <div className="sos-hero-content">
          <Link to="/" className="sos-back">← Back to SheRise Hub</Link>
          <span className="sos-badge">24/7 SAFETY SUPPORT</span>
          <h1>Emergency <span>SOS</span></h1>
          <p>
            If you are in immediate danger, contact emergency services first.
            This page helps you quickly call for help and share your location.
          </p>

          <div className="sos-actions">
            <button className={`sos-main-button ${sosActive ? "active" : ""}`} onClick={activateSOS}>
              <span className="sos-icon">🆘</span>
              <span>{sosActive ? "SOS ACTIVATED" : "ACTIVATE SOS"}</span>
            </button>
            <a className="sos-call-112" href="tel:112">📞 Call 112</a>
          </div>

          {message && <div className="sos-message" role="status">{message}</div>}
        </div>

        <div className="sos-status-card">
          <div className={`status-dot ${location ? "ready" : ""}`} />
          <div>
            <strong>Location status</strong>
            <p>{locationStatus}</p>
          </div>
          <button onClick={getLocation}>Get Location</button>
        </div>
      </section>

      <section className="sos-content">
        <div className="sos-section-heading">
          <span>QUICK HELP</span>
          <h2>Reach help in seconds</h2>
          <p>Tap a number below to open your phone's calling app.</p>
        </div>

        <div className="emergency-number-grid">
          {emergencyNumbers.map((item) => (
            <a className="emergency-number-card" href={`tel:${item.number}`} key={item.number}>
              <div className="number-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <strong>{item.number}</strong>
            </a>
          ))}
        </div>

        <div className="sos-tools-grid">
          <article className="sos-tool-card">
            <div className="tool-icon">📍</div>
            <h3>Share My Location</h3>
            <p>Get your current GPS location and share a Google Maps link with someone you trust.</p>
            <button className="sos-secondary-button" onClick={shareLocation}>Share My Location</button>
            {location && (
              <a
                className="map-link"
                target="_blank"
                rel="noreferrer"
                href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
              >
                Open on Maps →
              </a>
            )}
          </article>

          <article className="sos-tool-card">
            <div className="tool-icon">💙</div>
            <h3>Trusted Contact</h3>
            <p>Save one emergency contact on this device for quick calling when you need support.</p>
            <form className="trusted-sos-form" onSubmit={saveContact}>
              <input
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                placeholder="Name"
                aria-label="Trusted contact name"
              />
              <input
                value={contact.number}
                onChange={(e) => setContact({ ...contact, number: e.target.value })}
                placeholder="Phone number"
                inputMode="tel"
                aria-label="Trusted contact phone number"
                required
              />
              <div className="contact-buttons">
                <button className="sos-secondary-button" type="submit">Save Contact</button>
                <button className="sos-outline-button" type="button" onClick={callContact}>Call Contact</button>
              </div>
            </form>
          </article>
        </div>

        <div className="safety-note">
          <strong>Important:</strong> This website cannot automatically dispatch police, ambulance, or rescue services.
          For an immediate emergency in India, call <a href="tel:112">112</a>. The Government of India's Women Helpline is <a href="tel:181">181</a>. 
          Use the buttons above to contact real emergency services or a trusted person.
        </div>
      </section>
    </main>
  );
}
