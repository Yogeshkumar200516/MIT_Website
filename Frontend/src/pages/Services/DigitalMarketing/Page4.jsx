import React from 'react';
import image1 from '../../../assets/images/linkedin.svg';
import image2 from '../../../assets/images/google.svg';
import image3 from '../../../assets/images/instagram.svg';
import { useInView } from 'react-intersection-observer';
import './Page4.css';
import { useTranslation } from "react-i18next";

const Page4 = () => {

  const { t } = useTranslation();
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true });
  const { ref: socialRef, inView: socialInView } = useInView({ triggerOnce: true });

  return (
    <div className="page4-container-digital-unique">
      <div className="content-digital-unique">
        <h1 
          ref={headingRef} 
          className={`heading-digital-unique ${headingInView ? 'slide-in-bottom' : ''}`}
        >
          {t('digital4.title')}
        </h1>
        <p 
          ref={paragraphRef} 
          className={`paragraph-digital-unique ${paragraphInView ? 'slide-in-right' : ''}`}
        >
          {t('digital4.paragraph1')}
        </p>
        <p 
          className={`paragraph-digital-unique ${paragraphInView ? 'slide-in-right' : ''}`}
        >
          {t('digital4.paragraph2')}
        </p>
        <div 
          ref={socialRef} 
          className={`social-stats-digital-unique ${socialInView ? 'slide-in-left' : ''}`}
        >
          <div className="stat-item-digital-unique">
            <img src={image1} alt="LinkedIn" className="icon-digital-unique" />
            <p className="stat-text-digital-unique">{t('digital4.socialStats.linkedin.name')}<br />{t('digital4.socialStats.linkedin.followers')}</p>
          </div>
          <div className="stat-item-digital-unique">
            <img src={image2} alt="Google Reviews" className="icon-digital-unique" />
            <p className="stat-text-digital-unique">{t('digital4.socialStats.googleReviews.name')}<br />{t('digital4.socialStats.googleReviews.followers')}</p>
          </div>
          <div className="stat-item-digital-unique">
            <img src={image3} alt="Instagram" className="icon-digital-unique" />
            <p className="stat-text-digital-unique">{t('digital4.socialStats.instagram.name')}<br />{t('digital4.socialStats.instagram.followers')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
