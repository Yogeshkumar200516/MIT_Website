import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/mobile-back3.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page7.css'; // Import the CSS file for styling

const Page7 = () => {

    // Key points for mobile app maintenance and support
    const mobileAppMaintenancePoints = [
        'Regular app updates and new feature integration',
        'Monitoring app performance and uptime',
        'Ensuring app security with timely patches',
        'Bug fixing and technical issue resolution',
        'Optimizing app for latest OS versions and devices',
        'User feedback analysis and continuous improvements',
        'Managing backend services and database updates',
        'App store listing maintenance and optimization',
        'Providing ongoing support and troubleshooting',
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
        <div className="page8-container-web">
            <div className="page8-content-web">
                <div className="page8-left-web">
                    <h2 className="page8-title-web">Mobile App Maintenance & Support</h2>
                    <p className="page8-description-web">
                        At Mahisha India Technologies, we provide comprehensive maintenance and support services to ensure your mobile app remains up-to-date, secure, and fully functional. 
                        Our expert team handles everything from regular updates and bug fixes to performance optimization and feature enhancements. 
                        We ensure that your app remains compatible with the latest operating systems and devices, while continuously improving the user experience based on feedback and data analysis. 
                        With our proactive app management, you can focus on growing your business while we handle the technical aspects of your app’s upkeep.
                    </p>

                    <button className="page8-button-web">
                        Get a Quote
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                <div className="page8-right-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Mobile App Maintenance Illustration" 
                        className="page8-illustration-web" 
                    />
                </div>
            </div>
            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {mobileAppMaintenancePoints.map((name, index) => (
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
