import React, { useEffect, useState } from 'react';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { useInView } from 'react-intersection-observer';
import './Page6.css';
import { useTranslation } from 'react-i18next';

const Page6 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // 20% of the component is in the viewport
  });

  const { t } = useTranslation();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="page6-container" ref={ref}>
      {/* Left Section (Main Heading and Description) */}
      <div className={`page6-left ${isVisible ? 'slide-in-bottom' : ''}`}>
        <h1>{t('home7.title')}</h1>
        <p className={isVisible ? 'slide-in-right' : ''}>
          {t('home7.description')}
        </p>
      </div>

      {/* Features Section */}
      <div className="page6-features">
        {/* Feature Box 1 */}
        <div className={`feature-box ${isVisible ? 'slide-in-feature' : ''}`}>
          <div className="feature-icon-text">
            <SupportAgentIcon style={{ color: '#66bb6a', fontSize: '2rem', marginRight: '15px' }} />
            <h3 className={isVisible ? 'slide-in-right' : ''}>{t('home7.features.supportSystem.title')}</h3>
          </div>
          <p className={isVisible ? 'slide-in-bottom' : ''}>
          {t('home7.features.supportSystem.description')}
          </p>
        </div>

        {/* Feature Box 2 */}
        <div className={`feature-box ${isVisible ? 'slide-in-feature' : ''}`}>
          <div className="feature-icon-text">
            <Diversity1Icon style={{ color: '#66bb6a', fontSize: '2rem', marginRight: '15px' }} />
            <h3 className={isVisible ? 'slide-in-right' : ''}>{t('home7.features.friendlyRelationship.title')}</h3>
          </div>
          <p className={isVisible ? 'slide-in-bottom' : ''}>
          {t('home7.features.friendlyRelationship.description')}
          </p>
        </div>

        {/* Feature Box 3 */}
        <div className={`feature-box ${isVisible ? 'slide-in-feature' : ''}`}>
          <div className="feature-icon-text">
            <AutoModeIcon style={{ color: '#66bb6a', fontSize: '2rem', marginRight: '15px' }} />
            <h3 className={isVisible ? 'slide-in-right' : ''}>{t('home7.features.businessStrategies.title')}</h3>
          </div>
          <p className={isVisible ? 'slide-in-bottom' : ''}>
          {t('home7.features.businessStrategies.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page6;
