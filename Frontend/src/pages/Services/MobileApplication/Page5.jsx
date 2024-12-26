import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/mobile-back4.svg'; // Update this image to reflect Android development
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page5.css'; // Import the CSS file for styling
import { useTranslation } from "react-i18next";

const Page5 = () => {

    const { t } = useTranslation();
    const androidDevelopmentPoints = [
        t('mobile6.androidDevelopmentPoints.point1'),
        t('mobile6.androidDevelopmentPoints.point2'),
        t('mobile6.androidDevelopmentPoints.point3'),
        t('mobile6.androidDevelopmentPoints.point4'),
        t('mobile6.androidDevelopmentPoints.point5'),
        t('mobile6.androidDevelopmentPoints.point6'),
        t('mobile6.androidDevelopmentPoints.point7'),
        t('mobile6.androidDevelopmentPoints.point8'),
        t('mobile6.androidDevelopmentPoints.point9'),
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
                    <h2 className="page6-title-web">{t('mobile6.title')}</h2>
                    <p className="page6-description-web">
                    {t('mobile6.description')}
                    </p>

                    <button className="page6-button-web">
                    {t('mobile6.button')}
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
