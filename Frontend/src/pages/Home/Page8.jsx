import React, { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image1 from '../../assets/images/slide1.jpg';
import image2 from '../../assets/images/slide2.jpeg';
import image3 from '../../assets/images/slide3.jpg';
import image4 from '../../assets/images/slide4.jpg';
import image5 from '../../assets/images/slide5.jpg';
import './Page8.css';
import { useTranslation } from 'react-i18next';

const testimonials = [
  { image: image1, key: 'testimonial1' },
  { image: image2, key: 'testimonial2' },
  { image: image3, key: 'testimonial3' },
  { image: image4, key: 'testimonial4' },
  { image: image5, key: 'testimonial5' },
];

const Page8 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('left'); // Direction of the slide ('left' or 'right')

  const { t } = useTranslation();

  // Automatic carousel slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      triggerSlide((currentIndex + 1) % testimonials.length, 'left');
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Trigger slide with animation
  const triggerSlide = (newIndex, slideDirection) => {
    if (isAnimating) return;

    setDirection(slideDirection);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 1000); // Match animation duration in CSS
  };

  // Handlers for manual navigation
  const handleNext = () => {
    triggerSlide((currentIndex + 1) % testimonials.length, 'left');
  };

  const handlePrevious = () => {
    triggerSlide((currentIndex - 1 + testimonials.length) % testimonials.length, 'right');
  };

  const handleDotClick = (index) => {
    const slideDirection = index < currentIndex ? 'right' : 'left';
    triggerSlide(index, slideDirection);
  };

  // Fetch current testimonial based on index
  const { image, key } = testimonials[currentIndex];
  const speaker = t(`home10.${key}.speaker`);
  const quote = t(`home10.${key}.quote`);
  const designation = t(`home10.${key}.designation`);

  return (
    <div className="page8-carousel">
      <h2>{t('home10.title')}</h2> {/* Dynamically rendered title */}
      <div className={`carousel-content ${isAnimating ? `animating-${direction}` : ''}`}>
        <button className="arrow left-arrow" onClick={handlePrevious}>
          <ArrowBackIosNewIcon />
        </button>
        <img src={image} alt={`${speaker}`} className="carousel-image" />
        <div className="testimonial-details">
          <h3>{t('home10.speaker')}: <span className="speaker-name">{speaker}</span></h3>
          <p className="quote">"{quote}"</p>
          <p className="designation">({t('home10.designation')}: {designation})</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Page8;
