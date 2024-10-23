import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/mobile-back4.svg'; // Update this image to reflect Android development
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page5.css'; // Import the CSS file for styling

const Page5 = () => {
    const androidDevelopmentPoints = [
        'Custom Android app solutions tailored to business needs',
        'Native Android development using Kotlin and Java',
        'Seamless integration with third-party services and APIs',
        'Optimized performance across Android devices and versions',
        'User-friendly and intuitive UI/UX design for mobile apps',
        'Enhanced app security and data protection',
        'Mobile-responsive designs for tablets and smartphones',
        'Comprehensive testing and debugging for smooth performance',
        'Google Play Store optimization for better visibility and downloads',
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
        <div className="page6-container-web">
            <div className="page6-content-web">
                <div className="page6-left-web">
                    <h2 className="page6-title-web">Android App Development & Custom Mobile Solutions</h2>
                    <p className="page6-description-web">
                        At Mahisha India Technologies, we specialize in creating high-performance Android applications that cater to your business needs. Our team excels in developing scalable, secure, and feature-rich mobile solutions that run seamlessly across a wide range of Android devices. From concept to deployment, we ensure that every aspect of the app is tailored to enhance user engagement and drive growth for your business. Whether it's native app development using Kotlin and Java or integration with advanced mobile technologies, we deliver end-to-end Android solutions that help you thrive in the competitive app market.
                    </p>

                    <button className="page6-button-web">
                        Get a Quote
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                <div className="page6-right-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Android Development Illustration" 
                        className="page6-illustration-web" 
                    />
                </div>
            </div>
            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {androidDevelopmentPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page5;
