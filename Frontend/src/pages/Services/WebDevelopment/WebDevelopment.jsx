import React, { useState, useEffect } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Footer from '../../../components/Footer/Footer';
import './WebDevelopment.css'; // Import the CSS file
import { FaArrowUp } from 'react-icons/fa';

function WebsiteDevelopment() {
  const [showScroll, setShowScroll] = useState(false);

  // Handle scroll position to show or hide the scroll-to-top button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  // Scroll to top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="web-development-page">
      <div className="page1-web"><Page1 /></div>
      <div className="page2-web"><Page2 /></div>
      <div className="page3-web"><Page3 /></div>
      <div className="page4-web"><Page4 /></div>
      <div className="page5-web"><Page5 /></div>
      <div className="page6-web"><Page6 /></div>
      <div className="page7-web"><Page7 /></div>
      <div className="page8-web"><Page8 /></div>
      <div className="footer-web"><Footer /></div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp fontSize="large" />
        </div>
      )}
    </div>
  );
}

export default WebsiteDevelopment;
