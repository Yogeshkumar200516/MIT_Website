import React, { useEffect, useRef } from 'react';
import './Page3.css'; // Import the CSS file for styling
import { useTranslation } from "react-i18next";

const Page3 = () => {

    const { t } = useTranslation();
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = contentRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight - 100) {
                    element.classList.add('slide-in');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="page4-container-web">
            <div className="page4-content-web" ref={contentRef}>
                <h1 className="page4-title-web">
                    {t('mobile3.heading')}
                </h1>
                <p className="page4-subtitle-web">
                    {t('mobile3.subheading')}
                </p>
            </div>
        </div>
    );
};

export default Page3;
