import React, { useEffect } from 'react';
import image1 from '../../../assets/images/web-development-icon.svg';
import image2 from '../../../assets/images/e-commerce-icon.svg';
import image3 from '../../../assets/images/web-service-icon.svg';
import image4 from '../../../assets/images/website-revamp-icon.svg';
import './Page2.css';
import { useTranslation } from "react-i18next";

const Page2 = () => {

  const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      const title = document.querySelector('.design-page-title');
      const subtext = document.querySelector('.design-page-subtext');
      const cards = document.querySelectorAll('.design-service-card');

      const revealElement = (element, animationClass) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
          element.classList.add(animationClass);
        }
      };

      revealElement(title, 'animate-slide-up');
      revealElement(subtext, 'animate-slide-up');
      cards.forEach((card) => revealElement(card, 'animate-slide-left'));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="design-page-container">
      <div className="design-page-content">
        <h1 className="design-page-title hidden">{t('web2.title')}</h1>
        <p className="design-page-subtext hidden">
          {t('web2.subtext')}
        </p>

        <div className="design-service-cards">
          <div className="design-service-card hidden">
            <img src={image1} alt="Website Development" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">{t('web2.service1.title')}</h3>
              <p className="service-description">
                {t('web2.service1.description')}
              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image2} alt="Ecommerce Solutions" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">{t('web2.service2.title')}</h3>
              <p className="service-description">
              {t('web2.service2.description')}
              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image3} alt="Website Maintenance" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">{t('web2.service3.title')}</h3>
              <p className="service-description">
              {t('web2.service3.description')}
              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image4} alt="Website Revamp" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">{t('web2.service4.title')}</h3>
              <p className="service-description">
              {t('web2.service4.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
