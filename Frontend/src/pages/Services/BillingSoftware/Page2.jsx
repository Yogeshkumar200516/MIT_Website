import React, { useState, useEffect, useRef } from 'react';
import './Page2.css';
import billingIcon from '../../../assets/images/bill-img1.svg'; // Update the path to the billing software icon as needed
import { useTranslation } from "react-i18next";

const Page2 = () => {

  const { t } = useTranslation();
  // State to track the active step
  const [activeStep, setActiveStep] = useState(1);

  // Step descriptions for Billing Software process
  const stepDescriptions = {
    1: t('billing2.steps.step1.description'),
    2: t('billing2.steps.step2.description'),
    3: t('billing2.steps.step3.description'),
  };

  // Function to handle step click
  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  // Refs for animated elements
  const billingIconRef = useRef(null);
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

    if (billingIconRef.current) observer.observe(billingIconRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="billing-software-container">
      <div className="billing-software-left">
        <img
          src={billingIcon}
          alt="Billing Icon"
          className="billing-software-icon slide-left"
          ref={billingIconRef}
        />
      </div>
      <div className="billing-software-right">
        <h2
          className="billing-software-heading slide-top"
          ref={headingRef}
        >
          {t('billing2.pageTitle')}
        </h2>
        <div className="billing-software-divider"></div>
        <p
          className="billing-software-description slide-right"
          ref={descriptionRef}
        >
          {t('billing2.description')}
        </p>
        <div className="billing-software-steps-container">
          <div
            className={`billing-software-step ${activeStep === 1 ? 'active' : ''}`}
            onClick={() => handleStepClick(1)}
          >
            {t('billing2.steps.step1.title')}
          </div>
          <div
            className={`billing-software-step ${activeStep === 2 ? 'active' : ''}`}
            onClick={() => handleStepClick(2)}
          >
            {t('billing2.steps.step2.title')}
          </div>
          <div
            className={`billing-software-step ${activeStep === 3 ? 'active' : ''}`}
            onClick={() => handleStepClick(3)}
          >
            {t('billing2.steps.step3.title')}
          </div>
        </div>
        <div className="billing-software-step-description">
          {stepDescriptions[activeStep]}
        </div>
      </div>
    </div>
  );
};

export default Page2;
