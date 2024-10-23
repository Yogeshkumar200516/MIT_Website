import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/bill-img3.svg'; // Assuming a relevant image for Invoice Generation
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page6.css'; // Import the CSS file for styling

const Page6 = () => {

    const invoiceFeatures = [
        'Automated invoice creation and management',
        'Customizable invoice templates',
        'Recurring invoice generation for subscription services',
        'Real-time tracking of payments and due dates',
        'Integration with payment gateways for seamless transactions',
        'Multi-currency and multi-language support',
        'Tax calculation and compliance automation',
        'Bulk invoicing for high-volume clients',
        'Detailed invoice reports and analytics',
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
        <div className="page7-container-web">
            <div className="page7-content-web">
                <div className="page7-left-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Invoice Generation Illustration" 
                        className="page7-illustration-web" 
                    />
                </div>
                <div className="page7-right-web">
                <h2 className="page7-title-web">Invoice Generation</h2>
                <p className="page7-description-web">
                    At Mahisha India Technologies, we streamline your billing process with our automated invoice generation services. Our solutions are designed to simplify invoicing, reduce manual errors, and help you manage client payments more efficiently. Whether you’re managing recurring invoices or need custom templates, our system ensures that every invoice is accurate and compliant. Stay on top of payments with real-time tracking, automated reminders, and seamless integration with payment gateways. With multi-currency support, tax automation, and detailed analytics, our invoicing solutions save you time and help your business maintain a healthy cash flow.
                </p>

                    <button className="page7-button-web">
                        Get a Quote
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>
            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {invoiceFeatures.map((feature, index) => (
                        <span key={index}>
                            {feature} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page6;
