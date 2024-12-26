import React, { useEffect, useState } from "react";
import "./Page1.css";
import { useTranslation } from "react-i18next";

const Page1 = () => {
  const { t } = useTranslation();  // Fetch translation function

  // Array for team values and skills (values will now be translated)
  const teamValues = [
    t('team1.teamValues.value1'),
    t('team1.teamValues.value2'),
    t('team1.teamValues.value3'),
    t('team1.teamValues.value4'),
    t('team1.teamValues.value5'),
    t('team1.teamValues.value6'),
    t('team1.teamValues.value7'),
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
    <div className={`digital-page-container ${inView ? "animate" : ""}`}>
      <div className="digital-content-section">
        <h1 className="digital-title">{t('team1.title')}</h1> {/* Translated title */}
        <p className="digital-subtext">
          {t('team1.subtext')} {/* Translated subtext */}
        </p>
        <div className="digital-button-group">
          <button className="digital-explore-btn" onClick={handleQuoteClick}>
            {t('team1.joinUs')} {/* Translated button text */}
          </button>
        </div>
      </div>

      <div className="digital-scrolling-text">
        &nbsp;
        {teamValues.map((value, index) => (
          <span key={index}>
            {value} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
