import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/template1.png';
import image2 from '../../../assets/images/template2.png';
import image3 from '../../../assets/images/template3.png';
import image4 from '../../../assets/images/template4.png';
import image5 from '../../../assets/images/template5.png';
import image6 from '../../../assets/images/template6.png';
import './Page8.css'; // For custom styles

const Page8 = () => {
  const pageRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track if animation has been triggered

  // Website names to be displayed in the slider
  const aboutUsOptions = [
    'Our Story',
    'Our Mission',
    'Our Values',
    'Meet the Team',
    'Company History',
    'Careers',
    'Testimonials',
    'Press and Media',
    'Community Involvement',
    'Sustainability Efforts',
  ];

  // Join the names with a gap in between for better readability
  const slidingText = aboutUsOptions.join(' ✦ ');

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
        <h1>We Help Brands Increase Their Online Presence</h1>
        <p>
          At Mahisha India Technologies, we specialize in boosting your brand’s visibility and engagement online.
          Our expert team crafts tailored digital strategies to enhance your website, optimize social media,
          and drive targeted traffic. We focus on your unique goals to attract new customers and build lasting loyalty.
          Let us help you navigate the digital landscape and grow your online presence effectively.
        </p>
      </div>

      <div className="image-grid">
        {/* Image Grid as before */}
        <div className="grid-item"><img src={image1} alt="Website 1" /></div>
        <div className="grid-item"><img src={image2} alt="Website 2" /></div>
        <div className="grid-item"><img src={image3} alt="Website 3" /></div>
        <div className="grid-item"><img src={image4} alt="Website 4" /></div>
        <div className="grid-item"><img src={image5} alt="Website 5" /></div>
        <div className="grid-item"><img src={image6} alt="Website 6" /></div>
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

export default Page8;
