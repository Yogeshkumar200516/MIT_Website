import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/web-back5.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page8.css'; // Import the CSS file for styling
import { useTranslation } from "react-i18next";

const Page8 = () => {

    const { t } = useTranslation();

    const websiteMaintenancePoints = [
        t('web9.scrollingText.1'),
        t('web9.scrollingText.2'),
        t('web9.scrollingText.3'),
        t('web9.scrollingText.4'),
        t('web9.scrollingText.5'),
        t('web9.scrollingText.6'),
        t('web9.scrollingText.7'),
        t('web9.scrollingText.8'),
        t('web9.scrollingText.9'),
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
                <h2 className="page8-title-web">{t('web9.title')}</h2>
                <p className="page8-description-web">
                    {t('web9.description')}
                </p>

                    <button className="page8-button-web">
                        {t('web9.buttonText')}
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
