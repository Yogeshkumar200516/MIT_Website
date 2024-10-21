import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/web-back4.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page7.css'; // Import the CSS file for styling

const Page7 = () => {

    const websiteRevampPoints = [
        'Redesigning outdated websites with modern aesthetics',
        'Improving website performance and load times',
        'Optimizing user experience and navigation flow',
        'Upgrading to responsive design for better mobile access',
        'Integrating advanced SEO strategies for better rankings',
        'Enhancing security features for better data protection',
        'Incorporating new functionalities and features',
        'Migration to modern CMS platforms for easier management',
        'Aligning website design with the latest trends and technologies',
    ];
    

    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = imageRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight - 100) {
                    element.classList.add('slide-in-right');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="page7-container-web">
            <div className="page7-content-web">
                <div className="page7-left-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Web Development Illustration" 
                        className="page7-illustration-web" 
                    />
                </div>
                <div className="page7-right-web">
                <h2 className="page7-title-web">Website Revamp</h2>
                <p className="page7-description-web">
                    At Mahisha India Technologies, we understand the importance of keeping your website fresh and engaging. Our website revamp services are designed to breathe new life into your online presence. We focus on modernizing your site’s design, improving user experience, and enhancing functionality. Our team analyzes your current website to identify areas for improvement, ensuring that your revamped site is not only visually appealing but also optimized for performance and SEO. Whether you need a complete redesign or targeted updates to specific sections, we are dedicated to transforming your website into a powerful tool for business growth.
                </p>

                    <button className="page7-button-web">
                        Get a Quote
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>
            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {websiteRevampPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page7;
