import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/template1.png';
import image2 from '../../../assets/images/template2.png';
import image3 from '../../../assets/images/template3.png';
import image4 from '../../../assets/images/template4.png';
import image5 from '../../../assets/images/template5.png';
import image6 from '../../../assets/images/template6.png';
import './Page6.css'; // For custom styles
import { useTranslation } from "react-i18next";

const Page6 = () => {

  const { t } = useTranslation();
  const pageRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track if animation has been triggered

  // Key benefits of cross-platform development
  const crossPlatformOptions = [
    t('mobile7.crossPlatformOptions.option1'),
    t('mobile7.crossPlatformOptions.option2'),
    t('mobile7.crossPlatformOptions.option3'),
    t('mobile7.crossPlatformOptions.option4'),
    t('mobile7.crossPlatformOptions.option5'),
    t('mobile7.crossPlatformOptions.option6'),
    t('mobile7.crossPlatformOptions.option7'),
    t('mobile7.crossPlatformOptions.option8'),
    t('mobile7.crossPlatformOptions.option9'),
    t('mobile7.crossPlatformOptions.option10'),
  ];

  // Join the benefits with a gap in between for better readability
  const slidingText = crossPlatformOptions.join(' ✦ ');

  useEffect(() => {
    const handleScroll = () => {
      if (animationTriggered) return; // Prevent re-triggering

      const pageElement = pageRef.current;
      const rect = pageElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
        pageElement.classList.add('animate');
        setAnimationTriggered(true); // Mark animation as triggered
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, [animationTriggered]); // Dependency ensures that the scroll listener doesn't trigger again

  return (
    <div className="page-container" ref={pageRef}>
      <div className="hero-section">
        <h1>{t('mobile7.heroSection.title')}</h1>
        <p>
        {t('mobile7.heroSection.description')}
        </p>
      </div>

      <div className="image-grid">
        {/* Image Grid as before */}
        <div className="grid-item"><img src={image1} alt="App Design 1" /></div>
        <div className="grid-item"><img src={image2} alt="App Design 2" /></div>
        <div className="grid-item"><img src={image3} alt="App Design 3" /></div>
        <div className="grid-item"><img src={image4} alt="App Design 4" /></div>
        <div className="grid-item"><img src={image5} alt="App Design 5" /></div>
        <div className="grid-item"><img src={image6} alt="App Design 6" /></div>
      </div>

      <div className="footer-text">
        {/* Slider Text */}
        <div className="sliding-text">
          {/* Duplicate content to ensure continuous scrolling */}
          <p>{slidingText} ✦ {slidingText}</p>
        </div>
      </div>
    </div>
  );
}

export default Page6;
