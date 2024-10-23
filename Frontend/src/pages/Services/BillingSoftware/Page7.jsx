import React, { useEffect, useRef } from 'react';
import image from '../../../assets/images/bill-img2.svg'; // Assuming a relevant image for Tax Calculation & Expense Management
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Page7.css'; // Import the CSS file for styling

const Page7 = () => {

    const taxExpensePoints = [
        'Automated tax calculation based on current regulations',
        'Real-time expense tracking and categorization',
        'Generating detailed financial reports for better insights',
        'Integration with accounting software for seamless tax filing',
        'Tracking business expenses and reimbursable costs',
        'VAT, GST, and other tax type support',
        'Budget management and forecasting based on expenses',
        'Reducing manual errors in tax computation and filing',
        'Ensuring compliance with tax laws and regulations',
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
        <div className="page8-container-web">
            <div className="page8-content-web">
                <div className="page8-left-web">
                <h2 className="page8-title-web">Tax Calculation & Expense Management</h2>
                <p className="page8-description-web">
                    At Mahisha India Technologies, we simplify the complexities of tax calculation and expense management for your business. Our automated solutions ensure accurate tax computations, seamless expense tracking, and compliance with the latest tax laws. With real-time tracking, you can categorize and monitor your business expenses, enabling better financial control and budgeting. Whether it’s VAT, GST, or income tax, our platform supports various tax types, helping you minimize errors and stay compliant. Generate detailed reports and integrate with your existing accounting software for a smooth tax filing process.
                </p>

                    <button className="page8-button-web">
                        Get a Quote
                        <ArrowForwardIcon style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                <div className="page8-right-web" ref={imageRef}>
                    <img 
                        src={image}
                        alt="Tax and Expense Management Illustration" 
                        className="page8-illustration-web" 
                    />
                </div>
            </div>
            <div className="webdev-scrolling-text-web1">
                <div className="scrolling-container">
                    &nbsp;
                    {taxExpensePoints.map((point, index) => (
                        <span key={index}>
                            {point} ✦&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page7;
