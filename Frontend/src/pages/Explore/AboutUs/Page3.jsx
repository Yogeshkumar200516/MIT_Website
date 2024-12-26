import React from 'react';
import ReactTypingEffect from 'react-typing-effect'; // Named import for react-typing-effect
import './Page3.css';
import { useTranslation } from "react-i18next";

const Page3 = () => {

  const { t } = useTranslation();

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <p className="about-us-subtext">
          {t('about3.aboutUsSubtext')}
        </p>
        <h1 className="about-us-title">
          {t('about3.aboutUsTitle')} <ReactTypingEffect
            text={[
              t('about3.typingEffectTextCraft'),
              t('about3.typingEffectTextPassion'),
              t('about3.typingEffectTextMission'),
              t('about3.typingEffectTextCommitment'),
              t('about3.typingEffectTextGoal')
            ]}
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
