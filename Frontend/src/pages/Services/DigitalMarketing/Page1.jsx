import React, { useEffect, useState } from "react";
import "./Page1.css";
import { useTranslation } from "react-i18next";

const Page1 = () => {

  const { t } = useTranslation();
  // Array for website names
  const digitalMarketingNames = [
    t('digital1.scrollingText.1'),
    t('digital1.scrollingText.2'),
    t('digital1.scrollingText.3'),
    t('digital1.scrollingText.4'),
    t('digital1.scrollingText.5'),
    t('digital1.scrollingText.6'),
  ];

  // State to trigger animations on page load
  const [inView, setInView] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setInView(true); // Trigger animations immediately on mount
  }, []);

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mahishaindiatechnologies@gmail.com?subject=Get%20a%20Quote&body=Hi%20Mahisha%20India%20Technologies,";
  };

  return (
    <div className={`digital-page-container ${inView ? "animate" : ""}`}>
      <div className="digital-content-section">
        <h1 className="digital-title">{t('digital1.title')}</h1>
        <p className="digital-subtext">
        {t('digital1.subtext')}
        </p>
        <div className="digital-button-group">
          <button className="digital-explore-btn" onClick={handleQuoteClick}>{t('digital1.exploreButton')}</button>
          {/* <button className="webdev-special-btn">Special Offer!</button> */}
        </div>
      </div>

      <div className="digital-scrolling-text">
        &nbsp;
        {digitalMarketingNames.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
