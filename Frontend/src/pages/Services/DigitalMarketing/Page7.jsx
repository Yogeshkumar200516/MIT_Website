import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Page7.css';

const Page7 = () => {
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
        <h1 className={`content-title-unique ${hasAnimated ? 'slide-in-left' : ''}`}>Content Marketing Services</h1>
        <p className={`content-description-unique ${hasAnimated ? 'slide-in-right' : ''}`}>
          Want to grab attention, engage your audience, and drive results? That’s where our content marketing services come in. 
          We’re not just talking about churning out blog posts or social media updates. We’re talking about creating compelling, 
          valuable content that speaks directly to your audience’s needs and interests. Whether it’s informative articles, 
          captivating videos, or eye-catching infographics, we’ve got you covered. We’ll help you craft a content strategy 
          that builds brand authority, fosters trust, and drives action. Let’s tell your story in a way that resonates and gets results.
        </p>
      </div>

      {/* Container for scrolling quote cards */}
      <div className="scrolling-quotes-wrapper-unique">
        <div className="scrolling-quotes-content-unique">
          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Content marketing is all about your target customers. It’s about how you can educate, help, entertain, 
              challenge and facilitate their purchase decisions.
            </p>
            <p className="quote-author-unique">- Pam Didner</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Creating great content but not spending the time promoting it is the ultimate sin. No matter how good your content is, 
              if you don’t promote it then it will not achieve the success it deserves.
            </p>
            <p className="quote-author-unique">- Ian Cleary</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              The ultimate content marketing sin is not writing content for your target audience. This is increasingly important 
              in the digital world we live in.
            </p>
            <p className="quote-author-unique">- Richard Lorenzen</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              The ultimate content marketing sin is not having a content marketing plan, and believing the “experts/gurus” that there 
              is a pre-prescribed “best” way to do things.
            </p>
            <p className="quote-author-unique">- Ted Rubin</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              It’s a sin to lose focus on what is relevant. Your content should always be relevant to you, and relevant to your customer.
            </p>
            <p className="quote-author-unique">- Luan Wise</p>
          </div>

          {/* Additional quote cards */}
          <div className="quote-card-unique">
            <p className="quote-text-unique">
              Quality content isn’t about quality, it’s about the audience’s perception of the quality.
            </p>
            <p className="quote-author-unique">- Timi Clark</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              The best marketing doesn’t feel like marketing.
            </p>
            <p className="quote-author-unique">- Tom Fishburne</p>
          </div>

          <div className="quote-card-unique">
            <p className="quote-text-unique">
              You can’t sell anything if you can’t tell anything.
            </p>
            <p className="quote-author-unique">- Beth Comstock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
