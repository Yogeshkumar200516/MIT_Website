import React, { useEffect, useRef } from 'react';
import image1 from '../../../assets/images/slide2.jpeg';
import './Page2.css';
import { useTranslation } from "react-i18next";

function Page2() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  const { t } = useTranslation();

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
          {t('about2.aboutHeading')}
        </h1>
        <p className="about-description-unique" ref={descriptionRef}>
          {t('about2.aboutDescription')}
        </p>
        <button className="about-button-unique" onClick={handleQuoteClick}>{t('about2.buttonText')}</button>
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
