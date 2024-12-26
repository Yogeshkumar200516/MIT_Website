import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/linkedin.svg';
import image2 from '../../../assets/images/google.svg';
import image3 from '../../../assets/images/instagram.svg';
import './Page6.css';
import { useTranslation } from "react-i18next";

const Page6 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Optional: stop observing after the animation runs once
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`unique-support-container ${isVisible ? 'visible' : ''}`}>
      <h1 className="unique-support-heading">
        {t('about6.heading')}
      </h1>

      <div className="unique-social-icons-container">
        <div className="unique-social-box">
          <img src={image1} alt="LinkedIn" className="unique-social-icon" />
          <div className='unique2-grid'>
            <p className="unique-social-platform">{t('about6.linkedin.platform')}</p>
            <p className="unique-social-info">{t('about6.linkedin.info')}</p>
          </div>
        </div>

        <div className="unique-social-box">
          <img src={image2} alt="Google Reviews" className="unique-social-icon" />
          <div className='unique2-grid'>
            <p className="unique-social-platform">{t('about6.google.platform')}</p>
            <p className="unique-social-info">{t('about6.google.info')}</p>
          </div>
        </div>

        <div className="unique-social-box">
          <img src={image3} alt="Instagram" className="unique-social-icon" />
          <div className='unique2-grid'>
            <p className="unique-social-platform">{t('about6.instagram.platform')}</p>
            <p className="unique-social-info">{t('about6.instagram.info')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
