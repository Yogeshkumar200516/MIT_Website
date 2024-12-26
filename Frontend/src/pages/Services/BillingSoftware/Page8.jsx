import React, { useEffect, useState, useRef } from 'react';
import './Page8.css';
import { useTranslation } from "react-i18next";

const Page8 = () => {

  const { t } = useTranslation();
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
          <h1 className="about-title">{t('billing4.pageTitle')}</h1>
        </div>
        <div className="about-description-container">
          {t('billing4.description')}
          <p className="about-description">
          </p>
        </div>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <div className="about-icon achievement-icon"></div>
          <h2 className="card-title">{t('billing4.cards.card1.title')}</h2>
          <p className="card-description">
          {t('billing4.cards.card1.description')}
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon startup-icon"></div>
          <h2 className="card-title">{t('billing4.cards.card2.title')}</h2>
          <p className="card-description">
          {t('billing4.cards.card2.description')}
          </p>
        </div>
        <div className="about-card special-card">
          <div className="about-icon motto-icon"></div>
          <h2 className="card-title">{t('billing4.cards.card3.title')}</h2>
          <p className="card-description">
          {t('billing4.cards.card3.description')}
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon approach-icon"></div>
          <h2 className="card-title">{t('billing4.cards.card4.title')}</h2>
          <p className="card-description">
          {t('billing4.cards.card4.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page8;
