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

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mahishaindiatechnologies@gmail.com?subject=Get%20a%20Quote&body=Hi%20Mahisha%20India%20Technologies,";
  };

  return (
    <div className={`digital-page-container ${inView ? "animate" : ""}`}>
      <div className="digital-content-section">
        <h1 className="digital-title">Digital Marketing</h1>
        <p className="digital-subtext">
        Powering Your Digital Success with Unlock Your Digital Potential.Drive growth and maximize your online presence with strategic digital marketing solutions that deliver measurable results.
        </p>
        <div className="digital-button-group">
          <button className="digital-explore-btn" onClick={handleQuoteClick}>Explore Now</button>
          {/* <button className="webdev-special-btn">Special Offer!</button> */}
        </div>
      </div>

      <div className="digital-scrolling-text">
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
