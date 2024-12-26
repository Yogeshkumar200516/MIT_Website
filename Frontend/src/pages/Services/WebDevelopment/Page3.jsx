import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/home-back2.svg';
import './Page3.css'; // Updated CSS file with new class names
import { useTranslation } from "react-i18next";

const Page3 = () => {

  const { t } = useTranslation();
  // Create refs for the text elements
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  // Function to handle the sliding effect when elements are visible
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
          observer.unobserve(entry.target); // Stop observing after animation trigger
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe the heading and description elements
    if (headingRef.current) observer.observe(headingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
    };
  }, []);

  return (
    <div className="custom-homepage-wrapper">
      <div className="custom-homepage-layout">
        {/* Left side with the images */}
        <div className="custom-images-section">
          <img src={image} alt="Mobile view" className="custom-mobile-view" />
        </div>

        {/* Right side with the text and buttons */}
        <div className="custom-text-section">
          <h1 ref={headingRef} className="custom-heading-text">
          {t('home3.heading')}
          </h1>
          <p ref={descriptionRef} className="custom-description-text">
          {t('home3.description')}
          </p>

          {/* Buttons */}
          <div className="custom-button-group">
            <button className="custom-primary-button">{t('home3.buttons.ui_ux_design')}</button>
            <button className="custom-primary-button">{t('home3.buttons.user_friendly')}</button>
            <button className="custom-primary-button">{t('home3.buttons.responsiveness')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
