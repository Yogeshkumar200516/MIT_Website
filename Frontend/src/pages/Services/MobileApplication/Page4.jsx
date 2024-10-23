import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/mobile-back1.svg';
import image1 from '../../../assets/images/mobile-img1.jpg';
import image2 from '../../../assets/images/mobile-img2.jpg';
import image3 from '../../../assets/images/mobile-img3.jpeg';
import image4 from '../../../assets/images/mobile-img4.jpg';
import image5 from '../../../assets/images/mobile-img5.jpg';
import image6 from '../../../assets/images/mobile-img6.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page4.css';

const Page4 = () => {

    const iosDevelopmentDesignPoints = [
        'Custom iOS app development for all business needs',
        'Optimized performance and seamless user experience',
        'Native iOS development with Swift and Objective-C',
        'Incorporation of the latest iOS features like widgets and SiriKit',
        'Enhanced security with end-to-end encryption and data protection',
        'App Store optimization for better visibility and downloads',
        'Integration with Apple Pay, HealthKit, and other services',
        'Responsive designs tailored for iPhone, iPad, and Apple Watch',
        'User-friendly, intuitive UI/UX design for iOS applications',
    ];

    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = imageRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight - 100) {
                    element.classList.add('slide-in-bottom');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="page5-container-web">
            <div className="page5-content-web">
                <div className="page5-left-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="iOS App Development Illustration" 
                        className="page5-illustration-web" 
                    />
                </div>
                <div className="page5-right-web">
                    <h2 className="page5-title-web">iOS App Development</h2>
                    <p className="page5-description-web">
                        At Mahisha India Technologies, we deliver top-notch iOS app development services to help businesses create highly efficient, secure, and engaging iOS applications.
                        Our team specializes in building native iOS apps tailored to your specific business requirements using Swift and Objective-C. Whether it's a small-scale business or an enterprise, we ensure your app leverages the full potential of iOS features for an unparalleled user experience.
                        From seamless integration with Apple services to optimized performance on iPhones, iPads, and Apple Watches, we cover all aspects of iOS app development, making sure your app stands out on the App Store.
                    </p>
                    <button className="page5-button-web">
                        Get a Quote
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>

            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {iosDevelopmentDesignPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>

            <div className="page5-gallery-web">
                <div className="page5-gallery-content-web">
                    <img 
                        src={image1} 
                        alt="Sample iOS Project 1" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image2}
                        alt="Sample iOS Project 2" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image3}
                        alt="Sample iOS Project 3" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image4}
                        alt="Sample iOS Project 4" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image5}
                        alt="Sample iOS Project 5" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image6}
                        alt="Sample iOS Project 6" 
                        className="page5-sample-web" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Page4;
