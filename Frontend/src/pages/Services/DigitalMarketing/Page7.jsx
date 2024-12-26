import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Page7.css';
import { useTranslation } from "react-i18next";

const Page7 = () => {

  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.1 }); // Trigger when 10% is visible
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if the animation has occurred

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true); // Set to true to prevent re-animation
    }
  }, [inView, hasAnimated]);

  return (
    <div className="content-wrapper-unique" ref={ref}>
      <div className="content-header-unique">
        <h1 className={`content-title-unique ${hasAnimated ? 'slide-in-left' : ''}`}>{t('digital7.contentMarketing.heading')}</h1>
        <p className={`content-description-unique ${hasAnimated ? 'slide-in-right' : ''}`}>
        {t('digital7.contentMarketing.description')}
        </p>
      </div>

      {/* Container for scrolling quote cards */}
      <div className="scrolling-quotes-wrapper-unique">
        <div className="scrolling-quotes-content-unique">
          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('digital7.quotes1.text')}
            </p>
            <p className="quote-author-unique">- {t('digital7.quotes1.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('digital7.quotes2.text')}
            </p>
            <p className="quote-author-unique">- {t('digital7.quotes2.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('digital7.quotes3.text')}
            </p>
            <p className="quote-author-unique">- {t('digital7.quotes3.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('digital7.quotes4.text')}
            </p>
            <p className="quote-author-unique">- {t('digital7.quotes4.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('digital7.quotes5.text')}
            </p>
            <p className="quote-author-unique">- {t('digital7.quotes5.author')}</p>
          </div>

          {/* Additional quote cards */}
          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('digital7.quotes6.text')}
            </p>
            <p className="quote-author-unique">- {t('digital7.quotes6.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('digital7.quotes7.text')}
            </p>
            <p className="quote-author-unique">- {t('digital7.quotes7.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('digital7.quotes8.text')}
            </p>
            <p className="quote-author-unique">- {t('digital7.quotes8.author')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
