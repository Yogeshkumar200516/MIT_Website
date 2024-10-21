import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/seo-services.svg';
import './Page9.css';

const Page9 = () => {
  const seoHeaderRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if the animation has occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            seoHeaderRef.current.classList.add('visible');
            setHasAnimated(true); // Set to true to prevent future animations
          }
        });
      },
      { threshold: 0.1 }
    );

    if (seoHeaderRef.current) {
      observer.observe(seoHeaderRef.current);
    }

    return () => {
      if (seoHeaderRef.current) {
        observer.unobserve(seoHeaderRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="seo-page9-container">
      <div className="seo-flex-row">
        <div className="seo-header" ref={seoHeaderRef}>
          <h1>Professional SEO Services</h1>
          <hr />
          <p>
            Elevate your online presence with our professional SEO services. We employ strategic tactics 
            including keyword research, on-page optimization, and link building to improve your website’s 
            visibility and attract more qualified leads. Let our team of experts optimize your digital 
            presence and drive success in the digital realm.
          </p>
        </div>
        <div className="seo-image">
          <img src={image1} alt="SEO Illustration" />
        </div>
      </div>
      <div className="seo-tags-container">
        {['CODE', 'DEVELOPMENT', 'INNOVATION', 'APP', 'NETWORKING', 'SUPPORT', 'INFRASTRUCTURE', 
          'SEM', 'CYBERSECURITY', 'DESIGN', 'UX/UI', 'DOMAINS', 'HOSTING', 'SEO', 'SOCIAL MEDIA', 
          'AI', 'ANALYTICS', 'CONTENT', 'KEYWORDS', 'TRAFFIC'].map((tag, index) => (
          <button key={index} className="seo-tag-button">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page9;
