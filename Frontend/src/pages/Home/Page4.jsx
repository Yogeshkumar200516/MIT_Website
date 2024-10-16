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

const services = [
  { title: 'Blog Writing', icon: blogIcon },
  { title: 'Social Media Management', icon: mediaIcon },
  { title: 'Graphic Design', icon: softwareIcon },
  { title: 'Website Development', icon: webIcon },
  { title: 'Photography', icon: photoIcon },
  { title: 'Customer Software Development', icon: serviceIcon },
  { title: 'Business', icon: businessIcon },
  { title: 'Founder-lead Branding', icon: brandIcon },
];

const Page4 = () => {
  const [inView, setInView] = useState(false);

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
        You need it, we've got it
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
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
