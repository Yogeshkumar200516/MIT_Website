import React, { useEffect, useRef } from 'react';
import image1 from '../../../assets/images/mountain.svg';
import image2 from '../../../assets/images/target.svg';
import './Page5.css'; 
import { useTranslation } from "react-i18next";

const Page5 = () => {
  const mainHeadingRef = useRef(null);
  const journeyHeadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const visionBoxRef = useRef(null);
  const missionBoxRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.2, // Trigger when 20% of the element is in view
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('unique-visible');
          observer.unobserve(entry.target); // Stop observing once the animation has happened
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Add observers for each section
    if (mainHeadingRef.current) observer.observe(mainHeadingRef.current);
    if (journeyHeadingRef.current) observer.observe(journeyHeadingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (visionBoxRef.current) observer.observe(visionBoxRef.current);
    if (missionBoxRef.current) observer.observe(missionBoxRef.current);

    return () => {
      observer.disconnect(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="unique-aboutus-wrapper">
      <section className="unique-intro-section">
        <h3
          ref={journeyHeadingRef}
          className="unique-journey-heading unique-slide-in-left unique-hidden"
        >
          {t('about5.journeyHeading')}
        </h3>
        <h1
          ref={mainHeadingRef}
          className="unique-main-heading unique-slide-in-right unique-hidden"
        >
          {t('about5.mainHeading')}
        </h1>
        <p
          ref={descriptionRef}
          className="unique-description-text unique-slide-in-bottom unique-hidden"
        >
          {t('about5.description')}
        </p>
      </section>

      <section className="unique-vision-mission-container">
        <div
          ref={visionBoxRef}
          className="unique-vision-box unique-slide-in-top unique-hidden"
        >
          <img src={image1} alt={t('about5.visionTitle')} className="unique-vision-icon" />
          <h3 className="unique-vision-title">{t('about5.visionTitle')}</h3>
          <p className="unique-vision-description">
            {t('about5.visionDescription')}
          </p>
        </div>

        <div
          ref={missionBoxRef}
          className="unique-mission-box unique-slide-in-bottom unique-hidden"
        >
          <img src={image2} alt={t('about5.missionTitle')} className="unique-mission-icon" />
          <h3 className="unique-mission-title">{t('about5.missionTitle')}</h3>
          <p className="unique-mission-description">
            {t('about5.missionDescription')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page5;
