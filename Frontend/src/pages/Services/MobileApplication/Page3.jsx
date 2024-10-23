import React, { useEffect, useRef } from 'react';
import './Page3.css'; // Import the CSS file for styling

const Page3 = () => {
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
                    How can mobile apps revolutionize your business?
                </h1>
                <p className="page4-subtitle-web">
                    Build a mobile application that connects with your customers, enhances user experience, and drives 
                    engagement. Stay ahead of the competition by leveraging modern app technologies that suit your business needs, 
                    ensuring scalability, performance, and user satisfaction.
                </p>
            </div>
        </div>
    );
};

export default Page3;
