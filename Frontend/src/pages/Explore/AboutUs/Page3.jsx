import React from 'react';
import ReactTypingEffect from 'react-typing-effect'; // Named import for react-typing-effect
import './Page3.css';

const Page3 = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <p className="about-us-subtext">
          Good software is a work of art, and good art takes time. Our teams spend years mastering their craft in order to deliver exceptional products that customers love. Software isn't just our paycheck
        </p>
        <h1 className="about-us-title">
          It's our <ReactTypingEffect
            text={['craft.', 'passion.', 'mission.', 'commitment.', 'goal.']}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
            loop
          />
        </h1>
      </div>
    </div>
  );
};

export default Page3;
