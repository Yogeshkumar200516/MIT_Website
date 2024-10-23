import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/bill-img4.svg'; // Update the path to the relevant Billing Software image
import './Page3.css';

const Page3 = () => {
  const billingHeaderRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if the animation has occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            billingHeaderRef.current.classList.add('visible');
            setHasAnimated(true); // Set to true to prevent future animations
          }
        });
      },
      { threshold: 0.1 }
    );

    if (billingHeaderRef.current) {
      observer.observe(billingHeaderRef.current);
    }

    return () => {
      if (billingHeaderRef.current) {
        observer.unobserve(billingHeaderRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="seo-page9-container">
      <div className="seo-flex-row">
        <div className="seo-header" ref={billingHeaderRef}>
          <h1>Advanced Billing Software Solutions</h1>
          <hr />
          <p>
            Streamline your business operations with our advanced billing software. Our solution offers seamless 
            invoicing, payment tracking, and financial reporting to ensure your business stays organized and efficient. 
            With features like automated reminders, customizable invoice templates, and multi-currency support, 
            our billing software is designed to meet the needs of businesses of all sizes. Let us help you simplify 
            your billing process and focus more on growing your business.
          </p>
        </div>
        <div className="seo-image">
          <img src={image1} alt="Billing Software Illustration" />
        </div>
      </div>
      <div className="seo-tags-container">
        {['INVOICING', 'PAYMENTS', 'AUTOMATION', 'REPORTS', 'EXPENSES', 'FINANCE', 'TAX', 'RECURRING BILLING', 
          'CLOUD BASED', 'TRACKING', 'EFFICIENCY', 'SCALABILITY', 'SUPPORT', 'ANALYTICS', 'CUSTOMIZATION', 
          'MULTI-CURRENCY', 'INTEGRATIONS', 'SECURITY'].map((tag, index) => (
          <button key={index} className="seo-tag-button">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page3;
