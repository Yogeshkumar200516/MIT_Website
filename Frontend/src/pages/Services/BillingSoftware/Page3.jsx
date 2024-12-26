import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/bill-img4.svg'; // Update the path to the relevant Billing Software image
import './Page3.css';
import { useTranslation } from "react-i18next";

const Page3 = () => {

  const { t } = useTranslation();
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
          <h1>{t('billing3.pageTitle')}</h1>
          <hr />
          <p>
          {t('billing3.description')}
          </p>
        </div>
        <div className="seo-image">
          <img src={image1} alt="Billing Software Illustration" />
        </div>
      </div>
      <div className="seo-tags-container">
        {[t('billing3.tags.tag1'),
          t('billing3.tags.tag2'),
          t('billing3.tags.tag3'),
          t('billing3.tags.tag4'),
          t('billing3.tags.tag5'),
          t('billing3.tags.tag6'),
          t('billing3.tags.tag7'),
          t('billing3.tags.tag8'),
          t('billing3.tags.tag9'),
          t('billing3.tags.tag10'),
          t('billing3.tags.tag11'),
          t('billing3.tags.tag12'),
          t('billing3.tags.tag13'),
          t('billing3.tags.tag14'),
          t('billing3.tags.tag15'),
          t('billing3.tags.tag16'),
          t('billing3.tags.tag17'),
          t('billing3.tags.tag18'),
        ].map((tag, index) => (
          <button key={index} className="seo-tag-button">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page3;
