import React, { useEffect, useState } from "react";
import "./Page1.css";

const Page1 = () => {
  // Array for website names
  const mobileAppServices = [
    'iOS App Development',
    'Android App Development',
    'Cross-Platform App Development',
    'UI/UX Design for Mobile',
    'Mobile App Maintenance & Support',
    'App Store Optimization',
    'Custom Mobile App Solutions',
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
        <h1 className="digital-title">Mobile Applications</h1>
        <p className="digital-subtext">
        Powering Your Digital Success with Cutting-Edge Mobile Solutions. Unlock the potential of your business with innovative mobile applications designed to drive engagement, enhance user experience, and accelerate growth.
        </p>
        <div className="digital-button-group">
          <button className="digital-explore-btn">Explore Now</button>
          {/* <button className="webdev-special-btn">Special Offer!</button> */}
        </div>
      </div>

      <div className="digital-scrolling-text">
        &nbsp;
        {mobileAppServices.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
