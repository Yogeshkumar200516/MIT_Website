import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/web-back3.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page6.css'; // Import the CSS file for styling
import { useTranslation } from "react-i18next";

const Page6 = () => {

    const { t } = useTranslation();
    const ecommerceSolutionsPoints = [
        t('web6.scrollingText.point1'),
        t('web6.scrollingText.point2'),
        t('web6.scrollingText.point3'),
        t('web6.scrollingText.point4'),
        t('web6.scrollingText.point5'),
        t('web6.scrollingText.point6'),
        t('web6.scrollingText.point7'),
        t('web6.scrollingText.point8'),
        t('web6.scrollingText.point9'),
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
                    <h2 className="page6-title-web">{t('web6.title')}</h2>
                    <p className="page6-description-web">
                    {t('web6.description')}
                    </p>

                    <button className="page6-button-web">
                    {t('web6.button')}
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                <div className="page6-right-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Web Development Illustration" 
                        className="page6-illustration-web" 
                    />
                </div>
            </div>
            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {ecommerceSolutionsPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page6;
