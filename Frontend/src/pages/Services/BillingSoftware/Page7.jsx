import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/bill-img2.svg'; // Assuming a relevant image for Tax Calculation & Expense Management
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page7.css'; // Import the CSS file for styling
import { useTranslation } from "react-i18next";

const Page7 = () => {

    const { t } = useTranslation();

    const taxExpensePoints = [
        t('billing8.features.feature1'),
        t('billing8.features.feature2'),
        t('billing8.features.feature3'),
        t('billing8.features.feature4'),
        t('billing8.features.feature5'),
        t('billing8.features.feature6'),
        t('billing8.features.feature7'),
        t('billing8.features.feature8'),
        t('billing8.features.feature9'),
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
                <h2 className="page8-title-web">{t('billing8.pageTitle')}</h2>
                <p className="page8-description-web">
                {t('billing8.pageDescription')}
                </p>

                    <button className="page8-button-web">
                    {t('billing8.buttonText')}
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                <div className="page8-right-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Tax and Expense Management Illustration" 
                        className="page8-illustration-web" 
                    />
                </div>
            </div>
            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {taxExpensePoints.map((point, index) => (
                        <span key={index}>
                            {point} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page7;
