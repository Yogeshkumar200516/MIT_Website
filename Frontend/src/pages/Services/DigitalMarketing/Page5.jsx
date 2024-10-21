import React, { useState, useRef, useEffect } from 'react'; 
import image1 from '../../../assets/images/instagram.svg'; 
import image2 from '../../../assets/images/linkedin.svg'; 
import image3 from '../../../assets/images/facebook.svg'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import './Page5.css';

const Page5 = () => {
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
        <h1 className="heading-custom">Social Media Management</h1>
        <p className="paragraph-custom">
          Managing your social media presence effectively requires more than just posting regularly;
          it demands a strategic approach that resonates with your audience. Our social media management
          services encompass everything from content creation and scheduling to community engagement and
          performance tracking.
        </p>

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

const faqData = [
  {
    question: 'How often should I post on social media?',
    answer:
      'The frequency of your posts depends on your audience and the platforms you are using. Generally, posting 3-5 times a week is a good starting point. Consistency is key, so find a schedule that works for you and stick to it.',
  },
  {
    question: 'How do I know if my social media strategy is working?',
    answer:
      'You can measure the success of your strategy through various metrics, such as engagement rates, follower growth, and conversion rates. Use analytics tools to track these metrics and adjust your strategy accordingly.',
  },
  {
    question: 'Should I outsource social media management or handle it in-house?',
    answer:
      'Outsourcing can provide expertise and save you time, while in-house management allows for more control and brand consistency. Assess your resources, budget, and goals to make the best decision for your business.',
  },
];

export default Page5;
