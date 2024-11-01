import React, { useEffect, useState } from "react";
import "./Page1.css";

const Page1 = () => {
  // Array for website names
  const aboutUsOptions = [
    'Our Story',
    'Our Mission',
    'Our Values',
    'Meet the Team',
    'Company History',
    'Careers',
    'Testimonials',
    'Press and Media',
    'Community Involvement',
    'Sustainability Efforts',
  ];
  

  // State to trigger animations on page load
  const [inView, setInView] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setInView(true); // Trigger animations immediately on mount
  }, []);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://wa.me/918110818281', '_blank'); // Opens WhatsApp with the given number in a new tab
  };

  return (
    <div className={`digital-page-container ${inView ? "animate" : ""}`}>
      <div className="digital-content-section">
        <h1 className="digital-title">About Us</h1>
        <p className="digital-subtext">
        Embark on a journey with Nexus Info, where innovation meets expertise, and discover how we transform ideas into impactful digital solutions for your business.
        </p>
        <div className="digital-button-group">
          <button className="digital-explore-btn" onClick={handleWhatsAppClick}>Explore Now</button>
          {/* <button className="webdev-special-btn">Special Offer!</button> */}
        </div>
      </div>

      <div className="digital-scrolling-text">
        &nbsp;
        {aboutUsOptions.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
