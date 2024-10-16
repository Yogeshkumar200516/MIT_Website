import React, { useEffect, useState } from 'react';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { useInView } from 'react-intersection-observer';
import './Page6.css';

const Page6 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // 20% of the component is in the viewport
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="page6-container" ref={ref}>
      {/* Left Section (Main Heading and Description) */}
      <div className={`page6-left ${isVisible ? 'slide-in-bottom' : ''}`}>
        <h1>Why People Love Us</h1>
        <p className={isVisible ? 'slide-in-right' : ''}>
          At Mahisha India Technologies, it’s all about growing together. We’re a startup that prioritizes the growth of our clients over profit.
          We believe in creating real value and building lasting relationships. Our dedicated team goes the extra mile to ensure
          your success. Join us, and let’s achieve amazing things together!
        </p>
      </div>

      {/* Features Section */}
      <div className="page6-features">
        {/* Feature Box 1 */}
        <div className={`feature-box ${isVisible ? 'slide-in-feature' : ''}`}>
          <div className="feature-icon-text">
            <SupportAgentIcon style={{ color: '#66bb6a', fontSize: '2rem', marginRight: '15px' }} />
            <h3 className={isVisible ? 'slide-in-right' : ''}>Support System</h3>
          </div>
          <p className={isVisible ? 'slide-in-bottom' : ''}>
            Our dedicated support team provides prompt assistance, guidance, and solutions, ensuring our clients feel supported every step of the way.
          </p>
        </div>

        {/* Feature Box 2 */}
        <div className={`feature-box ${isVisible ? 'slide-in-feature' : ''}`}>
          <div className="feature-icon-text">
            <Diversity1Icon style={{ color: '#66bb6a', fontSize: '2rem', marginRight: '15px' }} />
            <h3 className={isVisible ? 'slide-in-right' : ''}>Friendly Relationship</h3>
          </div>
          <p className={isVisible ? 'slide-in-bottom' : ''}>
            We prioritize building genuine connections, fostering trust, and creating a welcoming atmosphere where clients feel valued and understood.
          </p>
        </div>

        {/* Feature Box 3 */}
        <div className={`feature-box ${isVisible ? 'slide-in-feature' : ''}`}>
          <div className="feature-icon-text">
            <AutoModeIcon style={{ color: '#66bb6a', fontSize: '2rem', marginRight: '15px' }} />
            <h3 className={isVisible ? 'slide-in-right' : ''}>Business Strategies</h3>
          </div>
          <p className={isVisible ? 'slide-in-bottom' : ''}>
            We offer innovative, tailored strategies that drive growth and success, empowering businesses to thrive in today's dynamic marketplace with confidence and clarity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page6;
