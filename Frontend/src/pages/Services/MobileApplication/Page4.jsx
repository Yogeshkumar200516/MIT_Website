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
import { useTranslation } from "react-i18next";

const Page4 = () => {

    const { t } = useTranslation();

    const iosDevelopmentDesignPoints = [
        t('mobile4.scrollingText.item1'),
        t('mobile4.scrollingText.item2'),
        t('mobile4.scrollingText.item3'),
        t('mobile4.scrollingText.item4'),
        t('mobile4.scrollingText.item5'),
        t('mobile4.scrollingText.item6'),
        t('mobile4.scrollingText.item7'),
        t('mobile4.scrollingText.item8'),
        t('mobile4.scrollingText.item9'),
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
                    <h2 className="page5-title-web">{t('mobile4.heading')}</h2>
                    <p className="page5-description-web">
                    {t('mobile4.description')}
                    </p>
                    <button className="page5-button-web">
                    {t('mobile4.button')}
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
