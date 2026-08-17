import React from "react";
import SchemeCard from "../components/SchemeCard";
import "../styles/pages.css";

export default function Schemes() {
  const schemes = [
    {
      id: 1,
      name: "Mukhyamantri Majhi Ladki Bahin Yojana",
      description: "Women empowerment scheme providing monthly financial assistance",
      benefit: "₹1,500 per month cash transfer",
      eligibility: "Married women aged 21-65 years with family income ≤ ₹2.5 lakh",
      category: "Women",
    },
    {
      id: 2,
      name: "Lek Ladki Yojana",
      description: "Support for girl child education and development",
      benefit: "₹46,000 at age 18 for higher education",
      eligibility: "Girls born from April 2021 onwards from families with ≤ ₹1 lakh income",
      category: "Women",
    },
    {
      id: 3,
      name: "Stand Up India",
      description: "Loan assistance for self-employment and business startups",
      benefit: "₹10 lakh to ₹1 crore collateral-free loans",
      eligibility: "Women, SC/ST entrepreneurs aged 18-65 years",
      category: "Women",
    },
    {
      id: 4,
      name: "PM Mudra Yojana",
      description: "Micro financing scheme for small business and entrepreneurship",
      benefit: "₹50,000 to ₹10 lakh without collateral security",
      eligibility: "Individuals (women preferred) starting micro businesses",
      category: "Women",
    },
    {
      id: 5,
      name: "PM Kaushal Vikas Yojana (PMKVY)",
      description: "Skill development training and certification program",
      benefit: "Free skill training with stipend and placement assistance",
      eligibility: "Youth aged 15-45 years, school dropouts, unemployed",
      category: "General",
    },
    {
      id: 6,
      name: "MAHASWAYAM Employment Portal",
      description: "Maharashtra government job portal for employment opportunities",
      benefit: "Job listings, career guidance, and placement services",
      eligibility: "All registered job seekers from Maharashtra",
      category: "General",
    },
    {
      id: 7,
      name: "National Fellowship for SC/ST",
      description: "Postgraduate scholarship for higher education",
      benefit: "Monthly stipend + tuition fee assistance up to ₹4 lakh",
      eligibility: "SC/ST candidates pursuing MA, MSc, MTech degrees",
      category: "SC",
    },
    {
      id: 8,
      name: "Post Matric Scholarship",
      description: "Educational support for students from economically weaker sections",
      benefit: "Tuition fees + monthly stipend (varies by state)",
      eligibility: "EWS/OBC students after 12th standard passing",
      category: "EWS",
    },
    {
      id: 9,
      name: "Savitribai Phule Scholarship",
      description: "Merit-based scholarship for girl students in Maharashtra",
      benefit: "₹4,000 to ₹25,000 per annum based on merit",
      eligibility: "Girls from low-income families scoring 60%+ in board exams",
      category: "Women",
    },
    {
      id: 10,
      name: "EBC Scholarship Scheme",
      description: "Financial support for Economically Backward Classes",
      benefit: "Tuition fee reimbursement + monthly assistance ₹500-₹1,000",
      eligibility: "EBC category students with family income ≤ ₹1 lakh/year",
      category: "EWS",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Government Schemes for Women</h1>
        <p>Explore schemes designed to empower and support women</p>
      </div>

      <div className="schemes-grid">
        {schemes.map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}
      </div>
    </div>
  );
}
