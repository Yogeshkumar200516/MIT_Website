import React, { useEffect, useRef } from 'react';
import image1 from '../../../assets/images/slide2.jpeg';
import './Page2.css';

function Page2() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const headingPosition = headingRef.current.offsetTop;
      const descriptionPosition = descriptionRef.current.offsetTop;
      const imagePosition = imageRef.current.offsetTop;

      if (scrollPosition > headingPosition + 100) {
        headingRef.current.classList.add('slide-in-left');
      }
      if (scrollPosition > descriptionPosition + 100) {
        descriptionRef.current.classList.add('slide-in-bottom');
      }
      if (scrollPosition > imagePosition + 100) {
        imageRef.current.classList.add('slide-in-right');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mahishaindiatechnologies@gmail.com?subject=Get%20a%20Quote&body=Hi%20Mahisha%20India%20Technologies,";
  };

  return (
    <div className="about-container-unique">
      <div className="about-content-unique">
        <h1 className="about-heading-unique" ref={headingRef}>
          Young team driving digital innovation and creativity
        </h1>
        <p className="about-description-unique" ref={descriptionRef}>
          At Mahisha India Technologies, we’re a dynamic team of young minds passionate about digital innovation and creativity.
          With fresh perspectives and boundless energy, we tackle every project with enthusiasm and dedication.
        </p>
        <button className="about-button-unique" onClick={handleQuoteClick}>Join Us</button>
      </div>
      <div className="about-image-container-unique">
        <img
          src={image1}
          alt="Young team working on digital innovation"
          className="about-image-unique"
          ref={imageRef}
        />
      </div>
    </div>
  );
}

export default Page2;
