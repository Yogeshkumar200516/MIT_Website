import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/home-back2.svg';
import './Page3.css'; // Updated CSS file with new class names

const Page3 = () => {
  // Create refs for the text elements
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  // Function to handle the sliding effect when elements are visible
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
          observer.unobserve(entry.target); // Stop observing after animation trigger
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe the heading and description elements
    if (headingRef.current) observer.observe(headingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
    };
  }, []);

  return (
    <div className="custom-homepage-wrapper">
      <div className="custom-homepage-layout">
        {/* Left side with the images */}
        <div className="custom-images-section">
          <img src={image} alt="Mobile view" className="custom-mobile-view" />
        </div>

        {/* Right side with the text and buttons */}
        <div className="custom-text-section">
          <h1 ref={headingRef} className="custom-heading-text">
            We create wonderful websites with high contrast and responsive layouts
          </h1>
          <p ref={descriptionRef} className="custom-description-text">
            Our websites are designed to be visually captivating, interactive, and fully responsive.
            Whether you're launching a personal blog, building an e-commerce platform, managing a business,
            or need a custom web solution, we provide comprehensive services. From engaging visitors to
            showcasing your products, our expertise ensures your website stands out and performs.
          </p>

          {/* Buttons */}
          <div className="custom-button-group">
            <button className="custom-primary-button">UI/UX DESIGN</button>
            <button className="custom-primary-button">USER FRIENDLY</button>
            <button className="custom-primary-button">RESPONSIVENESS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
