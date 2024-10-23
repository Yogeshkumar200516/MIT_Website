import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/template1.png';
import image2 from '../../../assets/images/template2.png';
import image3 from '../../../assets/images/template3.png';
import image4 from '../../../assets/images/template4.png';
import image5 from '../../../assets/images/template5.png';
import image6 from '../../../assets/images/template6.png';
import './Page6.css'; // For custom styles

const Page6 = () => {
  const pageRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track if animation has been triggered

  // Key benefits of cross-platform development
  const crossPlatformOptions = [
    'Develop Once, Deploy Anywhere',
    'Cost-effective Development Process',
    'Faster Time to Market',
    'Native-like Performance on Multiple Platforms',
    'Single Codebase for iOS and Android',
    'Easier Maintenance and Updates',
    'Wider Market Reach',
    'Reduced Development Effort',
    'Seamless Integration with APIs',
    'Unified User Experience Across Devices',
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
        <h1>We Build Seamless Cross-platform Mobile Apps</h1>
        <p>
          At Mahisha India Technologies, our cross-platform app development services allow you to reach a wider audience by creating apps that run smoothly on both iOS and Android. Using technologies like React Native and Flutter, we ensure your app provides a consistent, native-like experience across devices, while reducing costs and time-to-market. From design to deployment, we deliver apps that are tailored to your business goals.
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
