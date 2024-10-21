import React, { useEffect } from 'react';
import image1 from '../../../assets/images/linkedin.svg';
import image2 from '../../../assets/images/google.svg';
import image3 from '../../../assets/images/instagram.svg';
import { useInView } from 'react-intersection-observer';
import './Page4.css';

const Page4 = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true });
  const { ref: socialRef, inView: socialInView } = useInView({ triggerOnce: true });

  return (
    <div className="page4-container-digital-unique">
      <div className="content-digital-unique">
        <h1 
          ref={headingRef} 
          className={`heading-digital-unique ${headingInView ? 'slide-in-bottom' : ''}`}
        >
          Social Media Marketing
        </h1>
        <p 
          ref={paragraphRef} 
          className={`paragraph-digital-unique ${paragraphInView ? 'slide-in-right' : ''}`}
        >
          In today’s digital world, social media isn’t just about sharing photos and updates; 
          it’s a powerful tool for businesses to connect with their audience. Our social media 
          marketing services are designed to elevate your brand’s presence across platforms like 
          Facebook, Instagram, Twitter, and LinkedIn.
        </p>
        <p 
          className={`paragraph-digital-unique ${paragraphInView ? 'slide-in-right' : ''}`}
        >
          We craft engaging content, run targeted ad campaigns, and interact with your audience to 
          build meaningful relationships and drive results. From increasing brand awareness to 
          generating leads and boosting sales, we harness the full potential of social media to 
          help your business thrive in the online landscape. Let’s make your brand shine in the 
          digital spotlight together!
        </p>
        <div 
          ref={socialRef} 
          className={`social-stats-digital-unique ${socialInView ? 'slide-in-left' : ''}`}
        >
          <div className="stat-item-digital-unique">
            <img src={image1} alt="LinkedIn" className="icon-digital-unique" />
            <p className="stat-text-digital-unique">LinkedIn<br />9000+ Followers</p>
          </div>
          <div className="stat-item-digital-unique">
            <img src={image2} alt="Google Reviews" className="icon-digital-unique" />
            <p className="stat-text-digital-unique">Google Reviews<br />Rated 4.6/5 500+ Reviews</p>
          </div>
          <div className="stat-item-digital-unique">
            <img src={image3} alt="Instagram" className="icon-digital-unique" />
            <p className="stat-text-digital-unique">Instagram<br />10,000+ Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
