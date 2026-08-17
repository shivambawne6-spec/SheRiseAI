import React from "react";
import JobCard from "../components/JobCard";
import "../styles/pages.css";

export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Infosys",
      location: "Nagpur, Maharashtra",
      salary: "₹10,000 - ₹15,000/month",
      jobType: "Internship",
      skills: ["React", "JavaScript", "HTML/CSS"],
    },
    {
      id: 2,
      title: "Software Trainee",
      company: "Tata Consultancy Services (TCS)",
      location: "Pune, Maharashtra",
      salary: "₹12,000 - ₹18,000/month",
      jobType: "Internship",
      skills: ["Java", "Python", "SQL"],
    },
    {
      id: 3,
      title: "QA Testing Intern",
      company: "Persistent Systems",
      location: "Pune, Maharashtra",
      salary: "₹8,000 - ₹12,000/month",
      jobType: "Internship",
      skills: ["Manual Testing", "Automation", "JIRA"],
    },
    {
      id: 4,
      title: "Java Backend Intern",
      company: "HCL Technologies",
      location: "Nagpur, Maharashtra",
      salary: "₹11,000 - ₹16,000/month",
      jobType: "Internship",
      skills: ["Java", "Spring Boot", "MySQL"],
    },
    {
      id: 5,
      title: "Technical Support Executive",
      company: "Wipro",
      location: "Mumbai, Maharashtra",
      salary: "₹18,000 - ₹24,000/month",
      jobType: "Full-time",
      skills: ["Customer Support", "Windows/Linux", "Troubleshooting"],
    },
    {
      id: 6,
      title: "Graduate Engineer Trainee (GET)",
      company: "Capgemini",
      location: "Pune, Maharashtra",
      salary: "₹20,000 - ₹28,000/month",
      jobType: "Full-time",
      skills: ["Core Programming", "SQL", "Communication"],
    },
    {
      id: 7,
      title: "Customer Success Associate",
      company: "Tech Mahindra",
      location: "Nagpur, Maharashtra",
      salary: "₹16,000 - ₹22,000/month",
      jobType: "Full-time",
      skills: ["Customer Management", "CRM", "Communication"],
    },
    {
      id: 8,
      title: "Data Associate",
      company: "Amazon (Remote with Mumbai Office)",
      location: "Remote / Mumbai",
      salary: "₹25,000 - ₹35,000/month",
      jobType: "Full-time",
      skills: ["Data Analysis", "Excel", "SQL"],
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Jobs & Internships</h1>
        <p>Find amazing career opportunities tailored for you</p>
      </div>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
