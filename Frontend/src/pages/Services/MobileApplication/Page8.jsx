import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../assets/images/react.svg';
import image2 from '../../../assets/images/flutter2.svg';
import image3 from '../../../assets/images/swift.svg';
import image4 from '../../../assets/images/kotlin.svg';
import image5 from '../../../assets/images/firebase.svg';
import image6 from '../../../assets/images/graphql.svg';
import image7 from '../../../assets/images/laravel2.svg';
import './Page8.css'; // Custom styling for transitions and cards

const Page8 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pageRef = useRef(null);

    const technologies = [
        {
            name: "React Native",
            description: "A framework for building native apps using React.",
            image: image1
        },
        {
            name: "Flutter",
            description: "A UI toolkit for building natively compiled apps for mobile.",
            image: image2
        },
        {
            name: "Swift",
            description: "A powerful programming language for iOS app development.",
            image: image3
        },
        {
            name: "Kotlin",
            description: "A modern programming language for Android apps.",
            image: image4
        },
        {
            name: "Firebase",
            description: "A platform for building web and mobile applications.",
            image: image5
        },
        {
            name: "GraphQL",
            description: "A data query language used in some of our mobile apps.",
            image: image6
        },
        {
            name: "Laravel",
            description: "A powerful PHP framework with high rated activeness and features.",
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
            <h1 className={`title ${isVisible ? 'slide-in-right' : ''}`}>Mobile Application Technologies</h1>
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
