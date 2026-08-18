import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="heroText">

          

          <h1>
            Empowering Women Through
            <span> Safety, Skills & Opportunities</span>
          </h1>

          <p>
            SheRise Hub helps women learn technical skills,
            discover jobs, access government schemes and
            stay safe through one powerful platform.
          </p>

          <div className="heroButtons">
            <button className="primary">Explore Now</button>
            <button className="secondary" background-color="red"><a href="/sos">Emergency SOS</a></button>
          </div>

        </div>

        <div className="heroImage">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
            alt="Women Empowerment"
          />
        </div>

      </section>

      <section className="stats">

        <div className="statCard">
          <h2>12K+</h2>
          <p>Women Supported</p>
        </div>

        <div className="statCard">
          <h2>120+</h2>
          <p>Free Courses</p>
        </div>

        <div className="statCard">
          <h2>2,300+</h2>
          <p>Jobs Available</p>
        </div>

        <div className="statCard">
          <h2>24×7</h2>
          <p>Emergency Help</p>
        </div>

      </section>

      <section className="features">

        <h2>Everything Women Need In One Place</h2>

        <div className="featureGrid">

          <div className="featureCard">
            <h3><a href="/skills">🛡 Women's Safety</a></h3>
            <p>
              One tap SOS with live GPS location,
              trusted contacts and emergency support.
            </p>
          </div>

          <div className="featureCard">
            <h3><a href="/sos">💻 Technical Skills</a></h3>
            <p>
              Learn C, C++, Java, Python, React,
              DSA and AI completely free.
            </p>
          </div>

          <div className="featureCard">
            <h3><a href="/jobs">💼 Job Opportunities</a></h3>
            <p>
              Explore internships and fresher jobs
              across Maharashtra.
            </p>
          </div>

          <div className="featureCard">
            <h3><a href="//schemes">📚 Government Schemes</a></h3>
            <p>
              Find scholarships, women schemes,
              loans and financial benefits.
            </p>
          </div>

        </div>

      </section>

      <section className="cta">

        <h2>Start Your Journey Today</h2>

        <p>
          Join thousands of women building safer,
          smarter and stronger futures.
        </p>

        <button className="primary">Create Free Account</button>

      </section>

      <footer className="footer">

        <h3>SheRise Hub</h3>

        <p>
          Empowering Women Through Safety, Skills &
          Opportunities.
        </p>

      </footer>

    </>
  );
}