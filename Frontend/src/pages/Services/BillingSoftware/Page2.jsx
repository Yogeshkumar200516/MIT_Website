import React, { useState, useEffect, useRef } from 'react';
import './Page2.css';
import billingIcon from '../../../assets/images/bill-img1.svg'; // Update the path to the billing software icon as needed

const Page2 = () => {
  // State to track the active step
  const [activeStep, setActiveStep] = useState(1);

  // Step descriptions for Billing Software process
  const stepDescriptions = {
    1: 'Identify the billing needs of your business. Whether you need to handle recurring payments, generate invoices, or integrate with various payment gateways, understanding your requirements is the first step to implementing effective billing software.',
    2: 'Choose the right billing software solution. Ensure it is scalable, customizable, and secure. It should support multiple payment methods and currencies, provide insightful financial reports, and offer seamless integration with your existing systems.',
    3: 'Implement and customize the billing software to meet your business needs. Train your team to use the software effectively, automate invoicing and payment reminders, and ensure compliance with financial regulations to streamline your billing process.'
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
          Billing Software Solutions
        </h2>
        <div className="billing-software-divider"></div>
        <p
          className="billing-software-description slide-right"
          ref={descriptionRef}
        >
          Streamline your billing and invoicing processes with our powerful billing software solutions.
          Our software automates payment collection, simplifies invoicing, and provides accurate financial reports.
          Designed for businesses of all sizes, it ensures secure transactions, customizable billing templates,
          and easy integration with popular accounting tools. Whether you're managing subscriptions, generating
          invoices, or tracking payments, our billing software has you covered.
        </p>
        <div className="billing-software-steps-container">
          <div
            className={`billing-software-step ${activeStep === 1 ? 'active' : ''}`}
            onClick={() => handleStepClick(1)}
          >
            Step: 1
          </div>
          <div
            className={`billing-software-step ${activeStep === 2 ? 'active' : ''}`}
            onClick={() => handleStepClick(2)}
          >
            Step: 2
          </div>
          <div
            className={`billing-software-step ${activeStep === 3 ? 'active' : ''}`}
            onClick={() => handleStepClick(3)}
          >
            Step: 3
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
