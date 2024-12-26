import React, { useEffect, useState, useRef } from 'react';
import './Page4.css';
import { useTranslation } from "react-i18next";

const Page4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Create a reference to the section

  const { t } = useTranslation();

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
          <h1 className="about-title">{t('about4.aboutTitle')}</h1>
        </div>
        <div className="about-description-container">
          <p className="about-description">
          {t('about4.aboutDescription')}
          </p>
        </div>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <div className="about-icon achievement-icon"></div>
          <h2 className="card-title">{t('about4.card1Title')}</h2>
          <p className="card-description">
          {t('about4.card1Description')}
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon startup-icon"></div>
          <h2 className="card-title">{t('about4.card2Title')}</h2>
          <p className="card-description">
          {t('about4.card2Description')}
          </p>
        </div>
        <div className="about-card special-card">
          <div className="about-icon motto-icon"></div>
          <h2 className="card-title">{t('about4.card3Title')}</h2>
          <p className="card-description">
          {t('about4.card3Description')}
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon approach-icon"></div>
          <h2 className="card-title">{t('about4.card4Title')}</h2>
          <p className="card-description">
          {t('about4.card4Description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
