import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/web-back2.svg';
import image1 from '../../../assets/images/template1.png';
import image2 from '../../../assets/images/template2.png';
import image3 from '../../../assets/images/template3.png';
import image4 from '../../../assets/images/template4.png';
import image5 from '../../../assets/images/template5.png';
import image6 from '../../../assets/images/template6.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page5.css'; // Import the CSS file for styling
import { useTranslation } from "react-i18next";

const Page5 = () => {

    const { t } = useTranslation();

    const webDevelopmentDesignPoints = [
        t('web5.scrollingText.point1'),
        t('web5.scrollingText.point2'),
        t('web5.scrollingText.point3'),
        t('web5.scrollingText.point4'),
        t('web5.scrollingText.point5'),
        t('web5.scrollingText.point6'),
        t('web5.scrollingText.point7'),
        t('web5.scrollingText.point8'),
        t('web5.scrollingText.point9'),
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
                        alt="Web Development Illustration" 
                        className="page5-illustration-web" 
                    />
                </div>
                <div className="page5-right-web">
                    <h2 className="page5-title-web">{t('web5.title')}</h2>
                    <p className="page5-description-web">
                        {t('web5.description')}
                    </p>
                    <button className="page5-button-web">
                        {t('web5.button')}
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>

            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {webDevelopmentDesignPoints.map((name, index) => (
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
                        alt="Sample Project 1" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image2}
                        alt="Sample Project 2" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image3}
                        alt="Sample Project 3" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image4}
                        alt="Sample Project 3" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image5}
                        alt="Sample Project 3" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image6}
                        alt="Sample Project 3" 
                        className="page5-sample-web" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Page5;
