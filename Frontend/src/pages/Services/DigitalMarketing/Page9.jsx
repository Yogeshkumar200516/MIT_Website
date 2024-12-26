import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/seo-services.svg';
import './Page9.css';
import { useTranslation } from "react-i18next";

const Page9 = () => {

  const { t } = useTranslation();
  const seoHeaderRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if the animation has occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            seoHeaderRef.current.classList.add('visible');
            setHasAnimated(true); // Set to true to prevent future animations
          }
        });
      },
      { threshold: 0.1 }
    );

    if (seoHeaderRef.current) {
      observer.observe(seoHeaderRef.current);
    }

    return () => {
      if (seoHeaderRef.current) {
        observer.unobserve(seoHeaderRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="seo-page9-container">
      <div className="seo-flex-row">
        <div className="seo-header" ref={seoHeaderRef}>
          <h1>{t('digital9.header')}</h1>
          <hr />
          <p>
          {t('digital9.description')}
          </p>
        </div>
        <div className="seo-image">
          <img src={image1} alt="SEO Illustration" />
        </div>
      </div>
      <div className="seo-tags-container">
        {[t('digital9.tags.CODE'),
          t('digital9.tags.DEVELOPMENT'),
          t('digital9.tags.INNOVATION'),
          t('digital9.tags.APP'),
          t('digital9.tags.NETWORKING'),
          t('digital9.tags.SUPPORT'),
          t('digital9.tags.INFRASTRUCTURE'),
          t('digital9.tags.SEM'),
          t('digital9.tags.CYBERSECURITY'),
          t('digital9.tags.DESIGN'),
          t('digital9.tags.UX/UI'),
          t('digital9.tags.DOMAINS'),
          t('digital9.tags.HOSTING'),
          t('digital9.tags.SEO'),
          t('digital9.tags.SOCIAL MEDIA'),
          t('digital9.tags.AI'),
          t('digital9.tags.ANALYTICS'),
          t('digital9.tags.CONTENT'),
          t('digital9.tags.KEYWORDS'),
          t('digital9.tags.TRAFFIC'),
        ].map((tag, index) => (
          <button key={index} className="seo-tag-button">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page9;
