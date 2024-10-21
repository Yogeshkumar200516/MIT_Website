import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/linkedin.svg';
import image2 from '../../../assets/images/google.svg';
import image3 from '../../../assets/images/instagram.svg';
import './Page6.css';

const Page6 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

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
        We are awarded by people's support through social medias
      </h1>

      <div className="unique-social-icons-container">
        <div className="unique-social-box">
          <img src={image1} alt="LinkedIn" className="unique-social-icon" />
          <div className='unique2-grid'>
            <p className="unique-social-platform">LinkedIn</p>
            <p className="unique-social-info">Top Startup India 2023</p>
          </div>
        </div>

        <div className="unique-social-box">
          <img src={image2} alt="Google Reviews" className="unique-social-icon" />
          <div className='unique2-grid'>
            <p className="unique-social-platform">Google Reviews</p>
            <p className="unique-social-info">Rated 4.8/5 500+ Reviews</p>
          </div>
        </div>

        <div className="unique-social-box">
          <img src={image3} alt="Instagram" className="unique-social-icon" />
          <div className='unique2-grid'>
            <p className="unique-social-platform">Instagram</p>
            <p className="unique-social-info">35k+ Followers (Family)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
