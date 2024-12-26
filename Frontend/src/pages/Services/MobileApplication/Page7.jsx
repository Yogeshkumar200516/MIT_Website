import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/mobile-back3.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page7.css'; // Import the CSS file for styling
import { useTranslation } from "react-i18next";

const Page7 = () => {

    const { t } = useTranslation();

    // Key points for mobile app maintenance and support
    const mobileAppMaintenancePoints = [
        t('mobile8.mobileAppMaintenancePoints.point1'),
        t('mobile8.mobileAppMaintenancePoints.point2'),
        t('mobile8.mobileAppMaintenancePoints.point3'),
        t('mobile8.mobileAppMaintenancePoints.point4'),
        t('mobile8.mobileAppMaintenancePoints.point5'),
        t('mobile8.mobileAppMaintenancePoints.point6'),
        t('mobile8.mobileAppMaintenancePoints.point7'),
        t('mobile8.mobileAppMaintenancePoints.point8'),
        t('mobile8.mobileAppMaintenancePoints.point9'),
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
                    <h2 className="page8-title-web">{t('mobile8.heroSection.title')}</h2>
                    <p className="page8-description-web">
                    {t('mobile8.heroSection.description')}
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
