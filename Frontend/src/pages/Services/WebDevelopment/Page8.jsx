import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/web-back5.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page8.css'; // Import the CSS file for styling

const Page8 = () => {

    const websiteMaintenancePoints = [
        'Regular updates to website software and plugins',
        'Monitoring website performance and uptime',
        'Ensuring security patches and vulnerability fixes',
        'Content updates and management',
        'Backup and restore services to prevent data loss',
        'Fixing broken links and addressing technical issues',
        'Optimizing website speed and performance regularly',
        'Ensuring compatibility with new browsers and devices',
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
                <h2 className="page8-title-web">Website Maintenance</h2>
                <p className="page8-description-web">
                    At Mahisha India Technologies, we offer comprehensive website maintenance services to ensure your online presence remains effective and up-to-date. Our dedicated team monitors your site for performance issues, security vulnerabilities, and outdated content, allowing you to focus on your business while we take care of the technical aspects. We provide regular updates, backups, and security checks to keep your website running smoothly. With our proactive maintenance plans, you can enhance user experience, maintain search engine rankings, and respond swiftly to any issues that may arise. Trust us to keep your website performing at its best.
                </p>

                    <button className="page8-button-web">
                        Get a Quote
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                <div className="page8-right-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Web Development Illustration" 
                        className="page8-illustration-web" 
                    />
                </div>
            </div>
            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {websiteMaintenancePoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page8;
