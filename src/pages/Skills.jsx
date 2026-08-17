import React from "react";
import SkillCard from "../components/SkillCard";
import "../styles/pages.css";

export default function Skills() {
  const skills = [
    {
      id: 1,
      title: "C Programming",
      description: "Master C fundamentals, pointers, arrays, and memory management",
      level: "Beginner",
      duration: "6 weeks",
      icon: "📝",
      career: "Foundation for system programming and embedded systems",
    },
    {
      id: 2,
      title: "C++ Programming",
      description: "Object-oriented programming, STL, and competitive coding",
      level: "Intermediate",
      duration: "8 weeks",
      icon: "⚙️",
      career: "Game development, system software, and high-performance applications",
    },
    {
      id: 3,
      title: "Python Programming",
      description: "Core Python, data structures, file handling, and scripting",
      level: "Beginner",
      duration: "6 weeks",
      icon: "🐍",
      career: "Data science, web development, and automation roles",
    },
    {
      id: 4,
      title: "Java Programming",
      description: "Core Java, OOP, Collections, and exception handling",
      level: "Intermediate",
      duration: "8 weeks",
      icon: "☕",
      career: "Enterprise applications, Android development, and backend systems",
    },
    {
      id: 5,
      title: "DSA in Java",
      description: "Data structures, algorithms, complexity analysis, and problem-solving",
      level: "Intermediate",
      duration: "10 weeks",
      icon: "📊",
      career: "Cracking coding interviews and competitive programming",
    },
    {
      id: 6,
      title: "Web Development",
      description: "HTML5, CSS3, JavaScript, Bootstrap, and responsive design",
      level: "Beginner",
      duration: "8 weeks",
      icon: "🌐",
      career: "Frontend developer, freelance web designer positions",
    },
    {
      id: 7,
      title: "React.js",
      description: "Components, hooks, state management, and modern web apps",
      level: "Intermediate",
      duration: "6 weeks",
      icon: "⚛️",
      career: "React developer, full-stack engineer, startup opportunities",
    },
    {
      id: 8,
      title: "SQL & MySQL",
      description: "Database design, queries, joins, stored procedures, and optimization",
      level: "Intermediate",
      duration: "6 weeks",
      icon: "🗄️",
      career: "Database administrator, backend engineer, data analyst positions",
    },
    {
      id: 9,
      title: "Git & GitHub",
      description: "Version control, repositories, branching, and collaboration",
      level: "Beginner",
      duration: "2 weeks",
      icon: "🔧",
      career: "Essential skill for all software development roles",
    },
    {
      id: 10,
      title: "UI/UX Design",
      description: "Design principles, Figma, prototyping, and user research",
      level: "Beginner to Intermediate",
      duration: "7 weeks",
      icon: "🎨",
      career: "UI/UX designer, product designer, design intern positions",
    },
    {
      id: 11,
      title: "Cyber Security",
      description: "Network security, encryption, ethical hacking, and threat analysis",
      level: "Advanced",
      duration: "12 weeks",
      icon: "🔒",
      career: "Security analyst, penetration tester, cybersecurity consultant",
    },
    {
      id: 12,
      title: "AI & Machine Learning",
      description: "ML algorithms, neural networks, TensorFlow, and Python for AI",
      level: "Advanced",
      duration: "12 weeks",
      icon: "🤖",
      career: "ML engineer, data scientist, AI research opportunities",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Free Skill Courses</h1>
        <p>Upskill yourself with our comprehensive learning programs</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
