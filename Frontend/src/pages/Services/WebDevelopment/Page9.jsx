import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/html.svg';
import image2 from '../../../assets/images/css.svg';
import image3 from '../../../assets/images/javascript.svg';
import image4 from '../../../assets/images/react.svg';
import image5 from '../../../assets/images/express.svg';
import image6 from '../../../assets/images/graphql.svg';
import image7 from '../../../assets/images/mongodb2.svg';
import image8 from '../../../assets/images/express.svg';
import image9 from '../../../assets/images/graphql.svg';
import image10 from '../../../assets/images/mongodb2.svg';
import image11 from '../../../assets/images/java2.svg';
import './Page9.css'; // Custom styling for transitions and cards
import { useTranslation } from "react-i18next";

const Page9 = () => {

    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const pageRef = useRef(null);

    const webTechnologies = [
        {
            name: t('web7.technology1.name'),
            description: t('web7.technology1.description'),
            image: image1
        },
        {
            name: t('web7.technology2.name'),
            description: t('web7.technology2.description'),
            image: image2
        },
        {
            name: t('web7.technology3.name'),
            description: t('web7.technology3.description'),
            image: image3
        },
        {
            name: t('web7.technology4.name'),
            description: t('web7.technology4.description'),
            image: image4
        },
        {
            name: t('web7.technology5.name'),
            description: t('web7.technology5.description'),
            image: image5
        },
        {
            name: t('web7.technology6.name'),
            description: t('web7.technology6.description'),
            image: image6
        },
        {
            name: t('web7.technology7.name'),
            description: t('web7.technology7.description'),
            image: image7
        },
        {
            name: t('web7.technology8.name'),
            description: t('web7.technology8.description'),
            image: image8
        },
        {
            name: t('web7.technology9.name'),
            description: t('web7.technology9.description'),
            image: image9
        },
        {
            name: t('web7.technology10.name'),
            description: t('web7.technology10.description'),
            image: image10
        },
        {
            name: t('web7.technology11.name'),
            description: t('web7.technology11.description'),
            image: image11
        }
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
            <h1 className={`title ${isVisible ? 'slide-in-right' : ''}`}>{t('web7.title')}</h1>
            <div className="technology-grid">
                {webTechnologies.map((tech, index) => (
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

export default Page9;
