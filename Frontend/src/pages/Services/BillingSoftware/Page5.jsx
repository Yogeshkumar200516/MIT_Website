import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Page5.css';
import { useTranslation } from "react-i18next";

const Page5 = () => {

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
        <h1 className={`content-title-unique ${hasAnimated ? 'slide-in-left' : ''}`}>{t('billing6.pageTitle')}</h1>
        <p className={`content-description-unique ${hasAnimated ? 'slide-in-right' : ''}`}>
        {t('billing6.pageDescription')}
        </p>
      </div>

      {/* Container for scrolling quote cards */}
      <div className="scrolling-quotes-wrapper-unique">
        <div className="scrolling-quotes-content-unique">
          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('billing6.quotes.quote1.text')}
            </p>
            <p className="quote-author-unique">- {t('billing6.quotes.quote1.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('billing6.quotes.quote2.text')}
            </p>
            <p className="quote-author-unique">- {t('billing6.quotes.quote2.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('billing6.quotes.quote3.text')}
            </p>
            <p className="quote-author-unique">- {t('billing6.quotes.quote3.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('billing6.quotes.quote4.text')}
            </p>
            <p className="quote-author-unique">- {t('billing6.quotes.quote4.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('billing6.quotes.quote5.text')}
            </p>
            <p className="quote-author-unique">- {t('billing6.quotes.quote5.author')}</p>
          </div>

          {/* Additional quote cards */}
          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('billing6.quotes.quote6.text')}
            </p>
            <p className="quote-author-unique">- {t('billing6.quotes.quote6.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('billing6.quotes.quote7.text')}
            </p>
            <p className="quote-author-unique">- {t('billing6.quotes.quote7.author')}</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
            {t('billing6.quotes.quote8.text')}
            </p>
            <p className="quote-author-unique">- {t('billing6.quotes.quote8.author')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
