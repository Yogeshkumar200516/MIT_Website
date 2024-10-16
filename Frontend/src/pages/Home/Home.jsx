import React, { useState, useEffect } from 'react';
import './Home.css'; // Updated CSS file with new class names
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
import { FaArrowUp } from 'react-icons/fa'; // FontAwesome up arrow icon

const Home = () => {
  // State to track whether the button is visible or not
  const [isVisible, setIsVisible] = useState(false);

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
    // Listen for scroll events
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

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
