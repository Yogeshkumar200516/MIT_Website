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
import { FaArrowUp } from 'react-icons/fa';

function AboutUs() {

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
    <div className='about-page-container'>
      <div className='about-page1'>
        <Page1 />
      </div>
      <div className='about-page2'>
        <Page2 />
      </div>
      <div className='about-page3'>
        <Page3 />
      </div>
      <div className='about-page4'>
        <Page4 />
      </div>
      <div className='about-page5'>
        <Page5 />
      </div>
      <div className='about-page6'>
        <Page6 />
      </div>
      <div className='about-page7'>
        <Page7 />
      </div>
      <div className='about-page8'>
        <Page8 />
      </div>
      <div className='about-footer'>
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

export default AboutUs;
