import React, { useEffect, useState } from "react";
import "./Page1.css";

const Page1 = () => {
  // Array for website names
  const digitalMarketingNames = [
    'Social Media Management',
    'Content Marketing',
    'Email Marketing',
    'SEO Services',
    'Personal Branding',
    '&nbspSocial Media Marketing ',
  ];

  // State to trigger animations on page load
  const [inView, setInView] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setInView(true); // Trigger animations immediately on mount
  }, []);

  return (
    <div className={`webdev-page-container ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Billing Software</h1>
        <p className="webdev-subtext">
        Powering Your Digital Success with Unlock Your Digital Potential.Drive growth and maximize your online presence with strategic digital marketing solutions that deliver measurable results.
        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn">Explore Now</button>
          {/* <button className="webdev-special-btn">Special Offer!</button> */}
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {digitalMarketingNames.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
