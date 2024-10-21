import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/web-back3.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page6.css'; // Import the CSS file for styling

const Page6 = () => {
    const ecommerceSolutionsPoints = [
        'User-friendly shopping experience for customers',
        'Secure payment processing and transaction management',
        'Robust inventory management system',
        'Customizable product listings and categories',
        'Mobile-responsive design for on-the-go shopping',
        'Integration with various shipping options',
        'Advanced analytics for tracking customer behavior',
        'SEO optimization for increased visibility',
        'Multi-channel selling capabilities (e.g., social media, marketplaces)',
    ];
    
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = imageRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight - 100) {
                    element.classList.add('slide-in-right');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="page6-container-web">
            <div className="page6-content-web">
                <div className="page6-left-web">
                    <h2 className="page6-title-web">Ecommerce Solutions</h2>
                    <p className="page6-description-web">
                        At Mahisha India Technologies, we provide comprehensive ecommerce solutions designed to elevate your online business. Our team specializes in developing robust, scalable, and secure ecommerce platforms that are tailored to meet the unique needs of your business. From intuitive shopping cart functionalities to seamless payment processing and user-friendly product management systems, we ensure a smooth shopping experience for your customers. With our expert integration of advanced analytics tools, you can track customer behavior and optimize your strategies to drive sales. Whether you're starting a new venture or looking to enhance your existing ecommerce site, we are committed to helping you succeed in the digital marketplace.
                    </p>

                    <button className="page6-button-web">
                        Get a Quote
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                <div className="page6-right-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Web Development Illustration" 
                        className="page6-illustration-web" 
                    />
                </div>
            </div>
            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {ecommerceSolutionsPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page6;
