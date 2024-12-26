import React, { useState, useRef, useEffect } from 'react'; 
import image1 from '../../../assets/images/instagram.svg'; 
import image2 from '../../../assets/images/linkedin.svg'; 
import image3 from '../../../assets/images/facebook.svg'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import './Page5.css';
import { useTranslation } from "react-i18next";

const Page5 = () => {
  const { t } = useTranslation();  // Initialize t here

  // Now you can safely use t to get translations
  const faqData = [
    {
      question: t('digital5.faq1.question'),
      answer: t('digital5.faq1.answer'),
    },
    {
      question: t('digital5.faq2.question'),
      answer: t('digital5.faq2.answer'),
    },
    {
      question: t('digital5.faq3.question'),
      answer: t('digital5.faq3.answer'),
    },
  ];

  const [expandedItem, setExpandedItem] = useState(null);
  const contentRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + window.innerHeight;
      const pageOffset = document.querySelector('.page5-container-custom').offsetTop;
      if (offset > pageOffset) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const getContentHeight = (index) => {
    if (contentRefs.current[index]) {
      return expandedItem === index ? contentRefs.current[index].scrollHeight : 0;
    }
    return 0;
  };

  return (
    <div className="page5-container-custom">
      <div className={`content-left-custom ${isVisible ? 'slide-in-left' : ''}`}>
        <h1 className="heading-custom">{t('digital5.title')}</h1>
        <p className="paragraph-custom">{t('digital5.paragraph')}</p>

        <div className={`faq-list-custom ${isVisible ? 'slide-in-bottom' : ''}`}>
          {faqData.map((item, index) => (
            <div key={index} className="faq-item-custom" onClick={() => toggleItem(index)}>
              <div className="faq-title-custom">
                {item.question}
                <span className={`dropdown-icon-custom ${expandedItem === index ? 'open' : ''}`}>
                  <ExpandMoreIcon />
                </span>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)} 
                className="faq-detail-custom"
                style={{
                  height: getContentHeight(index), 
                }}
              >
                <p style={{paddingTop: '15px'}}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="images-right-custom">
        <div className="image-column-custom column-1-custom">
          <img src={image3} alt="Facebook" className="sliding-image-custom" />
          <img src={image3} alt="Facebook" className="sliding-image-custom" />
          <img src={image3} alt="Facebook" className="sliding-image-custom" />
          <img src={image3} alt="Facebook" className="sliding-image-custom" />
        </div>
        <div className="image-column-custom column-2-custom">
          <img src={image1} alt="Instagram" className="sliding-image-custom" />
          <img src={image1} alt="Instagram" className="sliding-image-custom" />
          <img src={image1} alt="Instagram" className="sliding-image-custom" />
          <img src={image1} alt="Instagram" className="sliding-image-custom" />
        </div>
        <div className="image-column-custom column-3-custom">
          <img src={image2} alt="Linkedin" className="sliding-image-custom" />
          <img src={image2} alt="Linkedin" className="sliding-image-custom" />
          <img src={image2} alt="Linkedin" className="sliding-image-custom" />
          <img src={image2} alt="Linkedin" className="sliding-image-custom" />
        </div>
      </div>
    </div>
  );
};

export default Page5;
