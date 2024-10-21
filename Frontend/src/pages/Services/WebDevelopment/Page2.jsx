import React, { useEffect } from 'react';
import image1 from '../../../assets/images/web-development-icon.svg';
import image2 from '../../../assets/images/e-commerce-icon.svg';
import image3 from '../../../assets/images/web-service-icon.svg';
import image4 from '../../../assets/images/website-revamp-icon.svg';
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
        <h1 className="design-page-title hidden">Website Design and Development</h1>
        <p className="design-page-subtext hidden">
          Our experienced team of designers crafts custom web designs that reflect your brand identity and resonate with your target customers. We prioritize user experience, ensuring seamless navigation and responsiveness across all devices, from desktops to mobiles.
        </p>

        <div className="design-service-cards">
          <div className="design-service-card hidden">
            <img src={image1} alt="Website Development" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">Website Development & Design</h3>
              <p className="service-description">
                We specialize in crafting user-friendly websites that cater to businesses of all sizes.
              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image2} alt="Ecommerce Solutions" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">Ecommerce Solutions</h3>
              <p className="service-description">
                Take your online store to the next level with our comprehensive ecommerce solutions.
              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image3} alt="Website Maintenance" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">Website Maintenance</h3>
              <p className="service-description">
                Our website maintenance services ensure that your website remains up-to-date and secure.
              </p>
            </div>
          </div>

          <div className="design-service-card hidden">
            <img src={image4} alt="Website Revamp" className="service-icon" />
            <div className="service-info">
              <h3 className="service-title">Website Revamp</h3>
              <p className="service-description">
                Our website revamp services are designed to breathe new life into outdated websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
