import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/bill-img3.svg'; // Assuming a relevant image for Invoice Generation
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page6.css'; // Import the CSS file for styling
import { useTranslation } from "react-i18next";

const Page6 = () => {

    const { t } = useTranslation();

    const invoiceFeatures = [
        t('billing7.features.feature1'),
        t('billing7.features.feature2'),
        t('billing7.features.feature3'),
        t('billing7.features.feature4'),
        t('billing7.features.feature5'),
        t('billing7.features.feature6'),
        t('billing7.features.feature7'),
        t('billing7.features.feature8'),
        t('billing7.features.feature9'),
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
                        alt="Invoice Generation Illustration" 
                        className="page7-illustration-web" 
                    />
                </div>
                <div className="page7-right-web">
                <h2 className="page7-title-web">{t('billing7.pageTitle')}</h2>
                <p className="page7-description-web">
                {t('billing7.pageDescription')}
                </p>

                    <button className="page7-button-web">
                    {t('billing7.buttonText')}
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>
            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {invoiceFeatures.map((feature, index) => (
                        <span key={index}>
                            {feature} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page6;
