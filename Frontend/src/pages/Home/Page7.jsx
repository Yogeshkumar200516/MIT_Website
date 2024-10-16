import React, { useEffect, useRef, useState } from 'react';
import image from '../../assets/images/home-back8.svg';
import './Page7.css';

const Page7 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
      }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);

  return (
    <div className={`page7-wrapper ${isVisible ? 'fade-in' : ''}`} ref={pageRef}>
      <div className="page7-content">
        <h1 className={`slide-from-top ${isVisible ? 'animate' : ''}`}>
          We’re here for your E-Commerce everything
        </h1>
        <div className="page7-feature">
          <h2 className={`slide-from-left ${isVisible ? 'animate' : ''}`}>Get a project manager</h2>
          <p className={`slide-from-right ${isVisible ? 'animate' : ''}`}>
            To guide you through each stage of launching your e-Commerce business
          </p>
        </div>
        <div className="page7-feature">
          <h2 className={`slide-from-left ${isVisible ? 'animate' : ''}`}>Accelerate time-to-market</h2>
          <p className={`slide-from-right ${isVisible ? 'animate' : ''}`}>
            With a dedicated team of top-tier freelance experts
          </p>
        </div>
        <div className="page7-feature">
          <h2 className={`slide-from-left ${isVisible ? 'animate' : ''}`}>Optimize your budget</h2>
          <p className={`slide-from-right ${isVisible ? 'animate' : ''}`}>
            With a dedicated project manager who will handle all your tasks, leaving you more money for marketing and growth
          </p>
        </div>
      </div>
      <img
        src={image}
        alt="Illustration"
        className={`page7-illustration slide-from-right ${isVisible ? 'animate' : ''}`}
      />
    </div>
  );
};

export default Page7;
