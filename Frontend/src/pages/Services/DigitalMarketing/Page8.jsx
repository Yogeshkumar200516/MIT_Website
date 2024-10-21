import React, { useState, useEffect, useRef } from 'react';
import './Page8.css';
import emailIcon from '../../../assets/images/email.svg'; // Update the path to the icon as needed

const Page8 = () => {
  // State to track the active step
  const [activeStep, setActiveStep] = useState(1);

  // Step descriptions
  const stepDescriptions = {
    1: 'Figure out what you want to achieve with your emails, like getting more sales or keeping people updated. Then, think about who you’re sending them to – your audience. What do they like? What do they need?',
    2: 'Ask people to sign up for your emails. You can do this on your website, social media, or when they buy something from you. Give them a reason to sign up, like a discount or cool stuff they’ll get in their inbox.',
    3: 'Write emails that people want to read. Make them personal and friendly. Use catchy subject lines, tell stories, and show off cool pictures. And don’t forget to tell people what you want them to do next, like click a link or reply to you.'
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
          Email Marketing Services
        </h2>
        <div className="email-marketing-divider"></div>
        <p
          className="email-marketing-description slide-right"
          ref={descriptionRef}
        >
          Think email marketing is outdated? Think again. Email marketing remains one of the
          most effective ways to connect with your audience and drive results. With our
          email marketing services, we’ll help you craft attention-grabbing campaigns that
          land right in your customers' inboxes. From compelling subject lines to
          personalized content, we’ll make sure your emails stand out and drive action.
          Whether you’re looking to promote a new product, nurture leads, or re-engage
          inactive subscribers, we’ve got the expertise to make it happen. Say hello to higher
          open rates, click-throughs, and conversions with our email marketing magic.
        </p>
        <div className="email-marketing-steps-container">
          <div
            className={`email-marketing-step ${activeStep === 1 ? 'active' : ''}`}
            onClick={() => handleStepClick(1)}
          >
            Step: 1
          </div>
          <div
            className={`email-marketing-step ${activeStep === 2 ? 'active' : ''}`}
            onClick={() => handleStepClick(2)}
          >
            Step: 2
          </div>
          <div
            className={`email-marketing-step ${activeStep === 3 ? 'active' : ''}`}
            onClick={() => handleStepClick(3)}
          >
            Step: 3
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
