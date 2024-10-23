import React, { useEffect, useRef } from 'react';
import image1 from '../../../assets/images/linkedin.svg';
import image2 from '../../../assets/images/instagram.svg';
import image3 from '../../../assets/images/facebook.svg';
import './Page4.css'; // External CSS file with unique classnames

const Page4 = () => {
  const sectionRef = useRef(null); // Ref to observe the section

  useEffect(() => {
    const section = sectionRef.current;

    // Intersection Observer callback
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'active' class when the section is in view
          section.querySelector('.branding-heading-unique').classList.add('active');
          section.querySelector('.branding-description-unique').classList.add('active');
          section.querySelector('.branding-icons-wrapper-unique').classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, { threshold: 0.3 });
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div ref={sectionRef} className="branding-container-unique">
      <div className="branding-content-unique">
        <h1 className="branding-heading-unique">Automated Billing</h1>
        <p className="branding-description-unique">
        In today’s competitive market, businesses are turning to automated generation tools to streamline their operations and enhance productivity. Instead of relying on manual processes, companies are utilizing advanced software and AI-driven solutions to automate tasks like invoicing, data analysis, and report generation. This approach not only reduces human error but also increases efficiency and scalability. Automated generation allows businesses to operate more smoothly, focus on strategic growth, and deliver consistent results with minimal effort. It’s a powerful way to optimize operations and maintain a competitive edge.
        </p>
        <div className="branding-icons-wrapper-unique">
          <img src={image1} alt="LinkedIn" className="branding-icon-unique" />
          <img src={image2} alt="Instagram" className="branding-icon-unique" />
          <img src={image3} alt="Facebook" className="branding-icon-unique" />
        </div>
      </div>
    </div>
  );
};

export default Page4;
