import React, { useEffect, useState, useRef } from 'react';
import './Page8.css';

const Page8 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Create a reference to the section

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8; // Adjust trigger point (80% of viewport)

      if (sectionTop < triggerPoint) {
        setIsVisible(true); // Make visible when section is in view
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`about-section-container ${isVisible ? 'active' : ''}`} 
      ref={sectionRef}
    >
      <div className="about-header-container">
        <div className="about-title-container">
          <h1 className="about-title">Driving Operational Efficiency Through Real-time Insights and Compliance.</h1>
        </div>
        <div className="about-description-container">
          <p className="about-description">
          At Mahisha India Technologies, we provide innovative solutions that streamline financial operations and ensure regulatory compliance. With our tools for real-time reporting, payment tracking, and Extended Producer Responsibility (EPR) management, we help businesses stay efficient, compliant, and ahead of the curve.
          </p>
        </div>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <div className="about-icon achievement-icon"></div>
          <h2 className="card-title">Real-time Reporting</h2>
          <p className="card-description">
          Stay on top of your business data with our real-time reporting tools. Monitor financial performance, expenses, and revenues as they happen, ensuring you have accurate data to make informed decisions and drive operational success.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon startup-icon"></div>
          <h2 className="card-title">Payment Tracking</h2>
          <p className="card-description">
          Simplify your financial workflow with our automated payment tracking system. Easily monitor incoming and outgoing transactions, and ensure all payments are processed and recorded efficiently for better cash flow management.
          </p>
        </div>
        <div className="about-card special-card">
          <div className="about-icon motto-icon"></div>
          <h2 className="card-title">Extended Producer Responsibility (EPR)</h2>
          <p className="card-description">
          Our EPR solutions help you manage waste responsibly, ensuring compliance with environmental regulations. Track your production impact and stay compliant with EPR requirements, contributing to a sustainable future.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon approach-icon"></div>
          <h2 className="card-title">Our Approach</h2>
          <p className="card-description">
          We combine innovative technology with industry expertise to deliver solutions that meet your business needs. Our approach focuses on streamlining operations, ensuring compliance, and driving growth through real-time insights and efficient management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page8;
