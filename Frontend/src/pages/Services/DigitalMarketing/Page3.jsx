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
        <div className="page3-container-web">
            <div className="page3-content-web" ref={contentRef}>
                <h1 className="page3-title-web">
                    {t('digital3.title')}
                </h1>
                <p className="page3-subtitle-web">
                {t('digital3.subtitle')}
                </p>
            </div>
        </div>
    );
};

export default Page3;
