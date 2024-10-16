import React, { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image1 from '../../assets/images/slide1.jpg';
import image2 from '../../assets/images/slide2.jpeg';
import image3 from '../../assets/images/slide3.jpg';
import image4 from '../../assets/images/slide4.jpg';
import image5 from '../../assets/images/slide5.jpg';
import './Page8.css';

const testimonials = [
  {
    image: image1,
    speaker: 'Marketing Expert',
    quote: 'Sixty Labs delivered exceptional results. Their creative strategies and thorough market analysis were key to our campaign\'s success.',
    designation: 'Marketing Director',
  },
  {
    image: image2,
    speaker: 'Business Strategist',
    quote: 'Their innovative solutions and attention to detail helped us scale up quickly.',
    designation: 'Business Manager',
  },
  {
    image: image3,
    speaker: 'E-Commerce Consultant',
    quote: 'The team’s expertise in e-commerce was instrumental in achieving our growth targets.',
    designation: 'E-Commerce Director',
  },
  {
    image: image4,
    speaker: 'Project Manager',
    quote: 'Sixty Labs managed our project seamlessly, delivering on time and within budget.',
    designation: 'Operations Head',
  },
  {
    image: image5,
    speaker: 'Freelance Expert',
    quote: 'Great experience collaborating with them! They truly understand the freelance ecosystem.',
    designation: 'Freelance Consultant',
  },
];

const Page8 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('left'); // Direction of the slide ('left' or 'right')

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

  const { image, speaker, quote, designation } = testimonials[currentIndex];

  return (
    <div className="page8-carousel">
      <h2>What People are Saying</h2>
      <div className={`carousel-content ${isAnimating ? `animating-${direction}` : ''}`}>
        <button className="arrow left-arrow" onClick={handlePrevious}>
          <ArrowBackIosNewIcon />
        </button>
        <img src={image} alt={`${speaker}`} className="carousel-image" />
        <div className="testimonial-details">
          <h3>Speaker: <span className="speaker-name">{speaker}</span></h3>
          <p className="quote">"{quote}"</p>
          <p className="designation">({designation})</p>
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
