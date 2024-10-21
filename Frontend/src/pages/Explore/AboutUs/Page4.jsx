import React, { useEffect, useState, useRef } from 'react';
import './Page4.css';

const Page4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Create a reference to the section

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8; // Adjust trigger point (80% of viewport)

      if (sectionTop < triggerPoint) {
        setIsVisible(true); // Make visible when section is in view
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`about-section-container ${isVisible ? 'active' : ''}`} 
      ref={sectionRef}
    >
      <div className="about-header-container">
        <div className="about-title-container">
          <h1 className="about-title">Empowering Growth Through Collaborative Innovation and Dedication.</h1>
        </div>
        <div className="about-description-container">
          <p className="about-description">
            Mahisha India Technologies not only concentrates on the website, we are your strategic partner in expanding your digital footprint.
            With a keen eye on the latest trends, we navigate the dynamic landscape of online growth, ensuring your business
            thrives in the digital era. Let us elevate your brand and reach new heights together.
          </p>
        </div>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <div className="about-icon achievement-icon"></div>
          <h2 className="card-title">Our Achievements</h2>
          <p className="card-description">
            Over the years, we've successfully completed 100+ websites for clients ranging from startups to multinational
            corporations. Each project showcases our commitment to quality and client satisfaction.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon startup-icon"></div>
          <h2 className="card-title">Empowering Startups</h2>
          <p className="card-description">
            We specialize in helping startups thrive in the digital landscape. From crafting their online presence to
            implementing strategic digital marketing initiatives, we're dedicated to fueling their growth and success.
          </p>
        </div>
        <div className="about-card special-card">
          <div className="about-icon motto-icon"></div>
          <h2 className="card-title">Our Motto</h2>
          <p className="card-description">
            "Growing together" isn't just a tagline for us; it's our guiding principle. We believe in fostering collaborative
            partnerships with our clients, growing alongside them, and celebrating shared successes along the way.
            Together, we're shaping a brighter digital future.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon approach-icon"></div>
          <h2 className="card-title">Our Approach</h2>
          <p className="card-description">
            We approach every project with a blend of creativity, innovation, and strategic thinking. By understanding our
            clients' unique needs and goals, we tailor solutions that deliver tangible results and drive long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
