import React, { useEffect, useState } from "react";
import "./Page1.css";
import { useTranslation } from "react-i18next";

const Page1 = () => {

  const { t } = useTranslation();
  // Array for key features of billing software
  const billingSoftwareFeatures = [
    t('billing1.scrollingText.feature1'),
    t('billing1.scrollingText.feature2'),
    t('billing1.scrollingText.feature3'),
    t('billing1.scrollingText.feature4'),
    t('billing1.scrollingText.feature5'),
    t('billing1.scrollingText.feature6'),
    t('billing1.scrollingText.feature7'),
  ];

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mahishaindiatechnologies@gmail.com?subject=Get%20a%20Quote&body=Hi%20Mahisha%20India%20Technologies,";
  };

  // State to trigger animations on page load
  const [inView, setInView] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setInView(true); // Trigger animations immediately on mount
  }, []);

  return (
    <div className={`webdev-page-container ${inView ? "animate" : ""}`}>
      <div className="webdev-content-section">
        <h1 className="webdev-title">{t('billing1.pageTitle')}</h1>
        <p className="webdev-subtext">
        {t('billing1.subtext')}
        </p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleQuoteClick}>{t('billing1.buttons.tryFreeDemo')}</button>
          {/* <button className="webdev-special-btn">Special Offer!</button> */}
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {billingSoftwareFeatures.map((feature, index) => (
          <span key={index}>
            {feature} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
