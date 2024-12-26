import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/web-back4.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page7.css'; // Import the CSS file for styling
import { useTranslation } from "react-i18next";

const Page7 = () => {

    const { t } = useTranslation();

    const websiteRevampPoints = [
        t('web8.scrollingText.1'),
        t('web8.scrollingText.2'),
        t('web8.scrollingText.3'),
        t('web8.scrollingText.4'),
        t('web8.scrollingText.5'),
        t('web8.scrollingText.6'),
        t('web8.scrollingText.7'),
        t('web8.scrollingText.8'),
        t('web8.scrollingText.9'),
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
                <h2 className="page7-title-web">{t('web8.title')}</h2>
                <p className="page7-description-web">
                {t('web8.description')}
                </p>

                    <button className="page7-button-web">
                    {t('web8.buttonText')}
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
