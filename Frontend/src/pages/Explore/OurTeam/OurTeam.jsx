import React, { useState, useEffect } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import { FaArrowUp } from 'react-icons/fa';
import Footer from '../../../components/Footer/Footer';

function OurTeam() {

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
    <div className='our-team-container'>
      <div className='out-team-page1'>
        <Page1 />
      </div>
      <div className='out-team-page2'>
        <Page2 />
      </div>
      <div className='out-team-page-footer'>
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp fontSize="large" />
        </div>
      )}
    </div>
  );
}

export default OurTeam;
