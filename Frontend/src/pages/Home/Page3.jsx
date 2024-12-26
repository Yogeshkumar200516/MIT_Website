import React, { useEffect, useState, useRef } from 'react';
import './Page3.css';
import { useTranslation } from 'react-i18next';

const Page3 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const descriptionRef = useRef(null);
    const { t } = useTranslation();

    // Function to check if the element is in view (for triggering the slide animation)
    useEffect(() => {
        const handleScroll = () => {
            const rect = descriptionRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function for stats counting animation
    const useCountUp = (endValue) => {
        const [value, setValue] = useState(0);

        useEffect(() => {
            let start = 0;
            const duration = 1000; // 1 second
            const increment = endValue / duration;

            const timer = setInterval(() => {
                start += increment;
                if (start >= endValue) {
                    clearInterval(timer);
                    setValue(endValue);
                } else {
                    setValue(Math.ceil(start));
                }
            }, 10);

            return () => clearInterval(timer);
        }, [endValue]);

        return value;
    };

    return (
        <div className="page3-container">
            <div className="overlay"></div>
            <div className="content">
                <p
                    ref={descriptionRef}
                    className={`description ${isVisible ? 'slide-up' : ''}`} 
                    style={{ fontFamily: 'Excon', fontWeight: 'bold' }}
                >
                    {t('home4.description')}
                </p>
                <div className="stats">
                    <div className="stat-item">
                        <h2>{useCountUp(10)}+</h2>
                        <p>{t('home4.stats.projects_ideas')}</p>
                    </div>
                    <div className="stat-item">
                        <h2>{useCountUp(10)}+</h2>
                        <p>{t('home4.stats.happy_clients')}</p>
                    </div>
                    <div className="stat-item">
                        <h2>{useCountUp(4.6)}/5</h2>
                        <p>{t('home4.stats.ratings')}</p>
                    </div>
                    <div className="stat-item">
                        <h2>{useCountUp(500)}+</h2>
                        <p>{t('home4.stats.learning_interns')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
