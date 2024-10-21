import React, { useEffect, useRef } from 'react';
import './Page4.css'; // Import the CSS file for styling

const Page4 = () => {
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
                    Which technologies will bring maximum value to your business?
                </h1>
                <p className="page4-subtitle-web">
                    Solve customer problems by choosing cutting-edge technologies for your tech stack. 
                    Take your business to the next level with the right solutions tailored to your own requirements.
                </p>
            </div>
        </div>
    );
};

export default Page4;
