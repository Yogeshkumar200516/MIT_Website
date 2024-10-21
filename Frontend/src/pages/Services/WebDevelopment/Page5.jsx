import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/web-back2.svg';
import image1 from '../../../assets/images/template1.png';
import image2 from '../../../assets/images/template2.png';
import image3 from '../../../assets/images/template3.png';
import image4 from '../../../assets/images/template4.png';
import image5 from '../../../assets/images/template5.png';
import image6 from '../../../assets/images/template6.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page5.css'; // Import the CSS file for styling

const Page5 = () => {

    const webDevelopmentDesignPoints = [
        'Responsive design for optimal viewing on all devices',
        'Custom web development tailored to your business needs',
        'User-friendly interface and navigation',
        'SEO-friendly structure for better search engine rankings',
        'Cross-browser compatibility for a seamless user experience',
        'Fast loading times and optimized performance',
        'Secure web applications with data protection',
        'CMS integration for easy content management',
        'Creative and modern UI/UX design',
    ];

    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = imageRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight - 100) {
                    element.classList.add('slide-in-bottom');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="page5-container-web">
            <div className="page5-content-web">
                <div className="page5-left-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Web Development Illustration" 
                        className="page5-illustration-web" 
                    />
                </div>
                <div className="page5-right-web">
                    <h2 className="page5-title-web">Web Development & Design</h2>
                    <p className="page5-description-web">
                        At Mahisha India Technologies, we specialize in crafting user-friendly websites that cater to businesses of all sizes. 
                        Our team ensures that your website is optimized for both desktop and mobile devices, providing a seamless experience for potential customers browsing on-the-go. 
                        We employ cutting-edge SEO techniques to boost your website's visibility on search engine results pages (SERPs), helping you attract organic traffic and increase conversions. 
                        Whether you're a brick and mortar store looking to expand your online presence or a university in need of a modern website, we've got you covered.
                    </p>
                    <button className="page5-button-web">
                        Get a Quote
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>

            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {webDevelopmentDesignPoints.map((name, index) => (
                        <span key={index}>
                            {name} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>

            <div className="page5-gallery-web">
                <div className="page5-gallery-content-web">
                    <img 
                        src={image1} 
                        alt="Sample Project 1" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image2}
                        alt="Sample Project 2" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image3}
                        alt="Sample Project 3" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image4}
                        alt="Sample Project 3" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image5}
                        alt="Sample Project 3" 
                        className="page5-sample-web" 
                    />
                    <img 
                        src={image6}
                        alt="Sample Project 3" 
                        className="page5-sample-web" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Page5;
