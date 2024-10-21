import React, { useEffect } from 'react';
import image1 from '../../../assets/images/social-management.svg';
import image2 from '../../../assets/images/social-marketing.svg';
import image3 from '../../../assets/images/personal-branding.svg';
import image4 from '../../../assets/images/content-marketing.svg';
import image5 from '../../../assets/images/email-marketing.svg';
import image6 from '../../../assets/images/seo-services2.svg';
import './Page2.css';

const Page2 = () => {
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
        <h1 className="design-page-title hidden">Unlock Your Digital Potential</h1>
        <p className="design-page-subtext hidden">
          Elevate your online presence with our strategic digital marketing solutions tailored to your business needs.
        </p>

        <div className="design-service-cards">
          <div className="design-service-card hidden">
            <img src={image1} alt="Service 1" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">Social Media Marketing</h3>
              <p className="service-description">
                Boost engagement and reach with targeted social media.
              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image2} alt="Service 2" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">Social Media Management</h3>
              <p className="service-description">
                Efficiently handle social media platforms for maximum impact.              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image3} alt="Service 3" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">Personal Branding</h3>
              <p className="service-description">
                Founders use personal branding on social media to promote their brands.
              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image4} alt="Service 4" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">Content Marketing</h3>
              <p className="service-description">
                Engage audiences with compelling and valuable content strategies.
              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image5} alt="Service 5" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">Email Marketing</h3>
              <p className="service-description">
                Reach customers directly with personalized email campaigns.
              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image6} alt="Service 6" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">SEO Services</h3>
              <p className="service-description">
                Increase online visibility and attract more organic traffic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
