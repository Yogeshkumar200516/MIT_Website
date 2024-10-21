import React, { useEffect, useState } from "react";
import "./Page1.css";

const Page1 = () => {
  // Array for website names
  const websiteNames = [
    'Design Agency Website',
    'Digital Marketing Website',
    'University/College Website',
    'Educational Website',
    'E-Commerce Website',
    'Travel Agency Website',
    'Hospital Website',
    'Tourism Website',
    'Real Estate Website',
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
        <h1 className="webdev-title">Website Development</h1>
        <p className="webdev-subtext">
          Our Web Design and Development services are crafted to transform your
          online presence into a captivating and high-performance platform.
        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn">Explore Now</button>
          <button className="webdev-special-btn">Special Offer!</button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {websiteNames.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
