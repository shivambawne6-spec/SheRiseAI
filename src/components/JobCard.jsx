import React from "react";
import "../styles/components.css";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3>{job.title}</h3>
        <span className={`job-type ${job.jobType.toLowerCase()}`}>
          {job.jobType}
        </span>
      </div>

      <div className="job-company">
        <strong>🏢</strong> {job.company}
      </div>

      <div className="job-location">
        <strong>📍</strong> {job.location}
      </div>

      <div className="job-salary">
        <strong>💰</strong> {job.salary}
      </div>

      <div className="job-skills">
        {job.skills.map((skill, idx) => (
          <span key={idx} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      <button className="btn-apply">Apply Now</button>
    </div>
  );
}
