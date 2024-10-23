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

const Page9 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pageRef = useRef(null);

    const webTechnologies = [
        {
            name: "HTML",
            description: "The standard markup language for creating the structure of web pages.",
            image: image1
        },
        {
            name: "CSS",
            description: "A style sheet language used for describing the look and formatting of a web document.",
            image: image2
        },
        {
            name: "JavaScript",
            description: "A versatile scripting language that enables dynamic behavior on web pages.",
            image: image3
        },
        {
            name: "React",
            description: "A JavaScript library for building fast and interactive user interfaces.",
            image: image4
        },
        {
            name: "Angular",
            description: "A platform and framework for building single-page client applications using HTML and TypeScript.",
            image: image5
        },
        {
            name: "Node.js",
            description: "A JavaScript runtime that allows server-side scripting, enabling JavaScript to run outside of a browser.",
            image: image6
        },
        {
            name: "Express.js",
            description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
            image: image7
        },
        {
            name: "MongoDB",
            description: "A NoSQL database program that uses JSON-like documents with optional schemas to store data.",
            image: image8
        },
        {
            name: "MySQL",
            description: "A popular open-source relational database management system that uses SQL (Structured Query Language).",
            image: image9
        },
        {
            name: "PostgreSQL",
            description: "An open-source relational database system known for its advanced features and compliance with SQL standards.",
            image: image10
        },
        {
            name: "Java",
            description: "A high-level, class-based, object-oriented programming language used for building robust, portable applications.",
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
            <h1 className={`title ${isVisible ? 'slide-in-right' : ''}`}>Web Application Technologies</h1>
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
