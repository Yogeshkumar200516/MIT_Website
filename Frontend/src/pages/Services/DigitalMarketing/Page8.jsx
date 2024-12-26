import React, { useState, useEffect, useRef } from 'react';
import './Page8.css';
import emailIcon from '../../../assets/images/email.svg'; // Update the path to the icon as needed
import { useTranslation } from "react-i18next";

const Page8 = () => {

  const { t } = useTranslation();
  // State to track the active step
  const [activeStep, setActiveStep] = useState(1);

  // Step descriptions
  const stepDescriptions = {
    1: t('digital8.steps.1.description'),
    2: t('digital8.steps.2.description'),
    3: t('digital8.steps.3.description'),
  };

  // Function to handle step click
  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  // Refs for animated elements
  const emailIconRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const options = {
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (emailIconRef.current) observer.observe(emailIconRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="email-marketing-container">
      <div className="email-marketing-left">
        <img
          src={emailIcon}
          alt="Email Icon"
          className="email-marketing-icon slide-left"
          ref={emailIconRef}
        />
      </div>
      <div className="email-marketing-right">
        <h2
          className="email-marketing-heading slide-top"
          ref={headingRef}
        >
         {t('digital8.heading')}
        </h2>
        <div className="email-marketing-divider"></div>
        <p
          className="email-marketing-description slide-right"
          ref={descriptionRef}
        >
          {t('digital8.description')}
        </p>
        <div className="email-marketing-steps-container">
          <div
            className={`email-marketing-step ${activeStep === 1 ? 'active' : ''}`}
            onClick={() => handleStepClick(1)}
          >
            {t('digital8.steps.1.title')}
          </div>
          <div
            className={`email-marketing-step ${activeStep === 2 ? 'active' : ''}`}
            onClick={() => handleStepClick(2)}
          >
            {t('digital8.steps.2.title')}
          </div>
          <div
            className={`email-marketing-step ${activeStep === 3 ? 'active' : ''}`}
            onClick={() => handleStepClick(3)}
          >
            {t('digital8.steps.1.title')}
          </div>
        </div>
        <div className="email-marketing-step-description">
          {stepDescriptions[activeStep]}
        </div>
      </div>
    </div>
  );
};

export default Page8;
