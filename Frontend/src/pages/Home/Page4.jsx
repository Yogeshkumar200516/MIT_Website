import React, { useEffect, useState } from 'react';
import './Page4.css';
import blogIcon from '../../assets/images/blog.png';
import mediaIcon from '../../assets/images/social-media.png';
import softwareIcon from '../../assets/images/illustration.png';
import webIcon from '../../assets/images/web.png';
import photoIcon from '../../assets/images/photography.png';
import serviceIcon from '../../assets/images/coding.png';
import businessIcon from '../../assets/images/cooperation.png';
import brandIcon from '../../assets/images/brand.png';
import { useTranslation } from 'react-i18next';

const services = [
  { key: 'blogWriting', icon: blogIcon },
  { key: 'socialMediaManagement', icon: mediaIcon },
  { key: 'graphicDesign', icon: softwareIcon },
  { key: 'websiteDevelopment', icon: webIcon },
  { key: 'photography', icon: photoIcon },
  { key: 'customerSoftwareDevelopment', icon: serviceIcon },
  { key: 'business', icon: businessIcon },
  { key: 'founderLeadBranding', icon: brandIcon },
];

const Page4 = () => {
  const [inView, setInView] = useState(false);

  const { t } = useTranslation();

  // Function to check if the element is in the viewport
  const handleScroll = () => {
    const element = document.querySelector('.page4-container');
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`page4-container ${inView ? 'in-view' : ''}`}>
      <h1 className={`page4-title ${inView ? 'slide-in' : ''}`}>
        {t('home6.title')}
        <div className="underline"></div>
      </h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${
              index % 2 === 0 ? 'slide-right' : 'slide-left'
            } ${inView ? 'in-view' : ''}`}
          >
            <img src={service.icon} alt={service.key} className="service-icon" />
            <h3>{t(`home6.services.${service.key}`)}</h3> {/* Translate service title */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
