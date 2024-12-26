import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/react.svg';
import image2 from '../../../assets/images/flutter2.svg';
import image3 from '../../../assets/images/swift.svg';
import image4 from '../../../assets/images/kotlin.svg';
import image5 from '../../../assets/images/firebase.svg';
import image6 from '../../../assets/images/graphql.svg';
import image7 from '../../../assets/images/laravel2.svg';
import './Page8.css'; // Custom styling for transitions and cards
import { useTranslation } from "react-i18next";

const Page8 = () => {

    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const pageRef = useRef(null);

    const technologies = [
        {
            name: t('mobile5.technology1.name'),
            description: t('mobile5.technology1.description'),
            image: image1
        },
        {
            name: t('mobile5.technology2.name'),
            description: t('mobile5.technology2.description'),
            image: image2
        },
        {
            name: t('mobile5.technology3.name'),
            description: t('mobile5.technology3.description'),
            image: image3
        },
        {
            name: t('mobile5.technology4.name'),
            description: t('mobile5.technology4.description'),
            image: image4
        },
        {
            name: t('mobile5.technology5.name'),
            description: t('mobile5.technology5.description'),
            image: image5
        },
        {
            name: t('mobile5.technology6.name'),
            description: t('mobile5.technology6.description'),
            image: image6
        },
        {
            name: t('mobile5.technology7.name'),
            description: t('mobile5.technology7.description'),
            image: image7
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (pageRef.current) {
            observer.observe(pageRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="mobile-app-container" ref={pageRef}>
            <h1 className={`title ${isVisible ? 'slide-in-right' : ''}`}>{t('mobile5.title')}</h1>
            <div className="technology-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className={`technology-card ${isVisible ? 'slide-in-left' : ''}`}>
                        <img src={tech.image} alt={`${tech.name} logo`} className="technology-image" />
                        <div className="technology-info">
                            <h2>{tech.name}</h2>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page8;
