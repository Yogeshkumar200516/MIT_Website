import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Page5.css';

const Page5 = () => {
  const { ref, inView } = useInView({ threshold: 0.1 }); // Trigger when 10% is visible
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if the animation has occurred

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true); // Set to true to prevent re-animation
    }
  }, [inView, hasAnimated]);

  return (
    <div className="content-wrapper-unique" ref={ref}>
      <div className="content-header-unique">
        <h1 className={`content-title-unique ${hasAnimated ? 'slide-in-left' : ''}`}>Billing Software Solutions</h1>
        <p className={`content-description-unique ${hasAnimated ? 'slide-in-right' : ''}`}>
          Streamline your business operations with our comprehensive billing software. From seamless invoice generation to efficient payment tracking, 
          we offer tools that simplify your financial processes. Whether it's automating tax calculations or managing expenses in real-time, our 
          billing solutions ensure you stay organized, compliant, and in control. Real-time reporting gives you the insights needed to make informed 
          financial decisions. Let us handle the numbers so you can focus on growing your business.
        </p>
      </div>

      {/* Container for scrolling quote cards */}
      <div className="scrolling-quotes-wrapper-unique">
        <div className="scrolling-quotes-content-unique">
          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Automated invoice generation reduces errors and speeds up payment collection, making your financial processes more efficient.
            </p>
            <p className="quote-author-unique">- Financial Expert</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Payment tracking in real-time helps businesses stay on top of cash flow and ensure timely collection from clients.
            </p>
            <p className="quote-author-unique">- Business Analyst</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Automated tax calculations not only save time but also ensure compliance with local regulations, minimizing audit risks.
            </p>
            <p className="quote-author-unique">- Tax Consultant</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Effective expense management can save companies significant amounts of money, reducing waste and optimizing budgets.
            </p>
            <p className="quote-author-unique">- Expense Management Expert</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Real-time reporting provides businesses with critical insights that drive smarter decisions and better financial outcomes.
            </p>
            <p className="quote-author-unique">- Data Analyst</p>
          </div>

          {/* Additional quote cards */}
          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Billing software that integrates expense management and real-time reporting empowers businesses to maintain financial health with ease.
            </p>
            <p className="quote-author-unique">- CFO</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Simplify your accounting processes with billing software that handles invoices, taxes, and expenses all in one platform.
            </p>
            <p className="quote-author-unique">- Accounting Professional</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Accurate financial data, automated invoice reminders, and real-time tracking are key to maintaining business stability.
            </p>
            <p className="quote-author-unique">- Financial Analyst</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
