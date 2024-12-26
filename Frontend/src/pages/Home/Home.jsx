import React, { useState, useEffect } from 'react';
import './Home.css';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Footer from '../../components/Footer/Footer';
import { FaArrowUp } from 'react-icons/fa';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Get current route/pathname

  // Show button when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    // Scroll to top when navigating to the Home page
    if (location.pathname === '/') {
      window.scrollTo(0, 0); // Force scroll to the top
    }

    // Show/hide the scroll-to-top button based on scroll position
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [location]); // Trigger whenever location changes (route change)

  return (
    <div className='home-page-layout'>
      <div className='page1'>
        <Page1 />
      </div>
      <div className='page9'>
        <Page9 />
      </div>
      <div className='page2'>
        <Page2 />
      </div>
      <div className='page3'>
        <Page3 />
      </div>
      <div className='page5'>
        <Page5 />
      </div>
      <div className='page4'>
        <Page4 />
      </div>
      <div className='page6'>
        <Page6 />
      </div>
      <div className='page10'>
        <Page10 />
      </div>
      <div className='page7'>
        <Page7 />
      </div>
      <div className='page8'>
        <Page8 />
      </div>
      <div>
        <Footer />
      </div>

      {/* Scroll-to-Top Button */}
      {isVisible && (
        <div className='scroll-to-top' onClick={scrollToTop}>
          <FaArrowUp className='up-arrow-icon' />
        </div>
      )}
    </div>
  );
};

export default Home;
