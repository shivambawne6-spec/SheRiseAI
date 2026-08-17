import React from "react";
import "../styles/components.css";

export default function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <h3>{skill.title}</h3>
      <p className="skill-description">{skill.description}</p>
      
      {skill.career && (
        <div className="skill-career">
          <strong>💼 Career Path:</strong>
          <p>{skill.career}</p>
        </div>
      )}
      
      <div className="skill-meta">
        <span className="badge">{skill.level}</span>
        <span className="duration">📚 {skill.duration}</span>
      </div>

      <button className="btn-primary">Start Learning</button>
    </div>
  );
}
