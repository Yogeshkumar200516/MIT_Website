import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Page1.css";

const Page1 = () => {
  // First call the `useTranslation` hook to get the `t` function
  const { t } = useTranslation();

  // Array for website names, use `t` function to translate them
  const aboutUsOptions = [
    t('about1.scrollingOptions.ourStory'),
    t('about1.scrollingOptions.ourMission'),
    t('about1.scrollingOptions.ourValues'),
    t('about1.scrollingOptions.meetTheTeam'),
    t('about1.scrollingOptions.companyHistory'),
    t('about1.scrollingOptions.careers'),
    t('about1.scrollingOptions.testimonials'),
    t('about1.scrollingOptions.pressAndMedia'),
    t('about1.scrollingOptions.communityInvolvement'),
    t('about1.scrollingOptions.sustainabilityEfforts'),
  ];

  // State to trigger animations on page load
  const [inView, setInView] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setInView(true); // Trigger animations immediately on mount
  }, []);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://wa.me/918110818281', '_blank'); // Opens WhatsApp with the given number in a new tab
  };

  return (
    <div className={`digital-page-container ${inView ? "animate" : ""}`}>
      <div className="digital-content-section">
        <h1 className="digital-title">{t('about1.title')}</h1>
        <p className="digital-subtext">{t('about1.subtext')}</p>
        <div className="digital-button-group">
          <button className="digital-explore-btn" onClick={handleWhatsAppClick}>
            {t('about1.buttonExplore')}
          </button>
        </div>
      </div>

      <div className="digital-scrolling-text">
        &nbsp;
        {aboutUsOptions.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
