import React, { useEffect, useState } from "react";
import "./Page1.css";

const Page1 = () => {
  // Array for team values and skills
  const teamValues = [
    'Collaboration & Teamwork',
    'Innovation & Creativity',
    'Problem-Solving Expertise',
    'Adaptability & Agility',
    'Commitment to Quality',
    'Customer-Centric Approach',
    'Continuous Learning & Growth',
  ];

  // State to trigger animations on page load
  const [inView, setInView] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setInView(true); // Trigger animations immediately on mount
  }, []);

  return (
    <div className={`digital-page-container ${inView ? "animate" : ""}`}>
      <div className="digital-content-section">
        <h1 className="digital-title">Our Team</h1>
        <p className="digital-subtext">
          Our team is united by a shared vision and a strong commitment to excellence. We bring together diverse skill sets to create impactful solutions and drive success for our clients.
        </p>
        <div className="digital-button-group">
          <button className="digital-explore-btn">Join Us</button>
          {/* <button className="webdev-special-btn">Special Offer!</button> */}
        </div>
      </div>

      <div className="digital-scrolling-text">
        &nbsp;
        {teamValues.map((value, index) => (
          <span key={index}>
            {value} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
