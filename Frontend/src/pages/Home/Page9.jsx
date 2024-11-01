import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import image1 from '../../assets/images/digital-marketing.svg';
import image2 from '../../assets/images/web-development.svg';
import image3 from '../../assets/images/graphic-design.svg';
import './Page9.css';

const Page9 = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);

    const handleNavigate = (path) => {
        navigate(path);
    };

    useEffect(() => {
        const section = sectionRef.current;
        const elements = section.querySelectorAll('.slide-from-bottom, .slide-from-right, .slide-from-left');

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            elements.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (
        <div className="service-section-container" ref={sectionRef}>
            <h2 className="service-section-title slide-from-bottom">Our Services</h2>
            <div className="service-title-underline"></div>
            <p className="service-section-description slide-from-right">
                Comprehensive Website Services to Ignite Your Online Success.
                Empower Your Business with Powerful Online Services from our Website.
            </p>
            <div className="service-cards-container">
                <div className="service-item-card1">
                    <img
                        src={image1}
                        alt="Digital Marketing"
                        className="service-image"
                    />
                    <h3 className="service-item-title slide-from-left">Digital Marketing</h3>
                    <p className="service-item-description slide-from-right">
                        Boost your online presence and connect with more people using our smart digital marketing strategies.
                    </p>
                    <button
                        className="service-explore-button slide-from-bottom"
                        onClick={() => handleNavigate('/digital-marketing')}
                    >
                        Explore <ArrowForwardIcon style={{ marginLeft: '5px' }} />
                    </button>
                </div>
                <div className="service-item-card2">
                    <img
                        src={image2}
                        alt="Web Development"
                        className="service-image"
                    />
                    <h3 className="service-item-title slide-from-left">Web Development</h3>
                    <p className="service-item-description slide-from-right">
                        We make attractive, easy-to-use websites that represent your brand well and help you reach more customers online.
                    </p>
                    <button
                        className="service-explore-button slide-from-bottom"
                        onClick={() => handleNavigate('/website-development')}
                    >
                        Explore <ArrowForwardIcon style={{ marginLeft: '10px' }} />
                    </button>
                </div>
                <div className="service-item-card3">
                    <img
                        src={image3}
                        alt="Graphic Design"
                        className="service-image"
                    />
                    <h3 className="service-item-title slide-from-left">Billing Software</h3>
                    <p className="service-item-description slide-from-right">
                    Simplify billing with fast, accurate, and user-friendly software designed to streamline and enhance your business efficiency.
                    </p>
                    <button
                        className="service-explore-button slide-from-bottom"
                        onClick={() => handleNavigate('/billing-software')}
                    >
                        Explore <ArrowForwardIcon style={{ marginLeft: '5px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page9;
