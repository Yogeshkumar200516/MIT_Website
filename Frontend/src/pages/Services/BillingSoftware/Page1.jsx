import React, { useEffect, useState } from "react";
import "./Page1.css";

const Page1 = () => {
  // Array for key features of billing software
  const billingSoftwareFeatures = [
    'Invoice Generation',
    'Automated Billing',
    'Payment Tracking',
    'Tax Calculation',
    'Expense Management',
    'Real-time Reporting',
    'Extended Producer Responsibility (EPR)',
  ];

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mahishaindiatechnologies@gmail.com?subject=Get%20a%20Quote&body=Hi%20Mahisha%20India%20Technologies,";
  };

  // State to trigger animations on page load
  const [inView, setInView] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setInView(true); // Trigger animations immediately on mount
  }, []);

  return (
    <div className={`webdev-page-container ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">Billing Software Solutions</h1>
        <p className="webdev-subtext">
          Streamline your billing processes with our advanced software. Our solution provides everything from invoice generation to real-time reporting, ensuring efficiency and accuracy in managing your finances. 
          Automate your billing operations and focus on growing your business while we handle the numbers.
        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleQuoteClick}>Try Free Demo</button>
          {/* <button className="webdev-special-btn">Special Offer!</button> */}
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {billingSoftwareFeatures.map((feature, index) => (
          <span key={index}>
            {feature} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
