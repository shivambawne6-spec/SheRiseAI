import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">SheRise Hub</Link>

<div className="navLinks">
  <a href="/">Home</a>
  <a href="/skills">Skills</a>
  <a href="/jobs">Jobs</a>
  <a href="/schemes">Schemes</a>
  <a href="/contacts">Contacts</a>
</div>

      <Link to="/login" className="login-btn">Login</Link>
    </nav>
  );
}