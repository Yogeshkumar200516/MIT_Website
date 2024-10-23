import React, { useEffect, useState, useRef } from 'react';
import './Page3.css';

const Page3 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const descriptionRef = useRef(null);

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
                    At Mahisha India Technologies, we're here to assist you with all things digital. Our team of young, forward-thinking individuals stays updated on the latest marketing and sales trends. Let us help grow your business exponentially, by a factor of 10.
                </p>
                <div className="stats">
                    <div className="stat-item">
                        <h2>{useCountUp(10)}+</h2>
                        <p>Projects Ideas</p>
                    </div>
                    <div className="stat-item">
                        <h2>{useCountUp(10)}+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="stat-item">
                        <h2>{useCountUp(4.6)}/5</h2>
                        <p>Ratings</p>
                    </div>
                    <div className="stat-item">
                        <h2>{useCountUp(500)}+</h2>
                        <p>Learning Interns</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
