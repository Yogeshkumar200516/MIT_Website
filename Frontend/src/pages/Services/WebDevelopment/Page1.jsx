import React, { useEffect, useState } from "react";
import "./Page1.css";
import { useTranslation } from "react-i18next";

const Page1 = () => {
  const { t } = useTranslation();

  // Array for website names based on translation keys
  const websiteNames = [
    t("web1.websiteNames.designAgency"),
    t("web1.websiteNames.digitalMarketing"),
    t("web1.websiteNames.universityCollege"),
    t("web1.websiteNames.educational"),
    t("web1.websiteNames.ecommerce"),
    t("web1.websiteNames.travelAgency"),
    t("web1.websiteNames.hospital"),
    t("web1.websiteNames.tourism"),
    t("web1.websiteNames.realEstate"),
  ];

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mahishaindiatechnologies@gmail.com?subject=Get%20a%20Quote&body=Hi%20Mahisha%20India%20Technologies,";
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open("https://wa.me/918110818281", "_blank"); // Opens WhatsApp with the given number in a new tab
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
        <h1 className="webdev-title">{t("web1.title")}</h1>
        <p className="webdev-subtext">{t("web1.subtext")}</p>
        <div className="webdev-button-group">
          <button className="webdev-explore-btn" onClick={handleQuoteClick}>
            {t("web1.exploreButton")}
          </button>
          <button className="webdev-special-btn" onClick={handleWhatsAppClick}>
            {t("web1.specialOfferButton")}
          </button>
        </div>
      </div>

      <div className="webdev-scrolling-text">
        &nbsp;
        {websiteNames.map((name, index) => (
          <span key={index}>
            {name} ✦&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Page1;
