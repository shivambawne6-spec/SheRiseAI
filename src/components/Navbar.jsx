import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo"><h1>SheRise</h1></Link>

<div className="navLinks">
  <a href="/">Home</a>
  <a href="/skills">Skills</a>
  <a href="/jobs">Jobs</a>
  <a href="/schemes">Schemes</a>
  <a href="/contacts">Contacts</a>
  <a href="/sos" className="sos-nav-link">SOS</a>
  
</div>

      <button className="login"><Link to="/login" className="login-btn"><h3>Login</h3></Link></button>
    </nav>
  );
}