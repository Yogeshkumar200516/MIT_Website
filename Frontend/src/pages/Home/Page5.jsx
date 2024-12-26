import React from "react";
import './Page5.css';
import { useTranslation } from 'react-i18next';

const Page5 = () => {

  const { t } = useTranslation();
  
    return (
      <div className='page5-container'>
        <h1>{t('home5')}</h1>
      </div>
      
    );
  };
  
  export default Page5;