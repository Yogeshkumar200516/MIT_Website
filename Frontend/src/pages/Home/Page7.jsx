import React, { useEffect, useRef, useState } from 'react';
import image from '../../assets/images/home-back8.svg';
import './Page7.css';
import { useTranslation } from 'react-i18next';

const Page7 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
      }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);

  return (
    <div className={`page7-wrapper ${isVisible ? 'fade-in' : ''}`} ref={pageRef}>
      <div className="page7-content">
        <h1 className={`slide-from-top ${isVisible ? 'animate' : ''}`}>
        {t('home9.title')}
        </h1>
        <div className="page7-feature">
          <h2 className={`slide-from-left ${isVisible ? 'animate' : ''}`}>{t('home9.features.feature1.title')}</h2>
          <p className={`slide-from-right ${isVisible ? 'animate' : ''}`}>
          {t('home9.features.feature1.description')}
          </p>
        </div>
        <div className="page7-feature">
          <h2 className={`slide-from-left ${isVisible ? 'animate' : ''}`}>{t('home9.features.feature2.title')}</h2>
          <p className={`slide-from-right ${isVisible ? 'animate' : ''}`}>
          {t('home9.features.feature2.description')}
          </p>
        </div>
        <div className="page7-feature">
          <h2 className={`slide-from-left ${isVisible ? 'animate' : ''}`}>{t('home9.features.feature3.title')}</h2>
          <p className={`slide-from-right ${isVisible ? 'animate' : ''}`}>
          {t('home9.features.feature3.description')}
          </p>
        </div>
      </div>
      <img
        src={image}
        alt="Illustration"
        className={`page7-illustration slide-from-right ${isVisible ? 'animate' : ''}`}
      />
    </div>
  );
};

export default Page7;
