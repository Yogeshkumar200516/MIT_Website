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
        <div className="page3-container-web">
            <div className="page3-content-web" ref={contentRef}>
                <h1 className="page3-title-web">
                    Research and Planning
                </h1>
                <p className="page3-subtitle-web">
                    Digital marketing is a process of promoting and boosting of virtual businesses on the digital world. We understand the importance of it and our experts optimize the website with organic leads that tend to grow the business in all aspects.
                </p>
            </div>
        </div>
    );
};

export default Page3;
