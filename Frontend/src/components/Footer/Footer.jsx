import React, { useState } from 'react';
import { FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Import mail and social icons
import PhoneIcon from '@mui/icons-material/PhoneOutlined'; // Import Material icon for phone
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import Material icon for WhatsApp
import image1 from '../../assets/images/img69.png';
import image2 from '../../assets/images/img72.png';
import image3 from '../../assets/images/img70.png';
import image4 from '../../assets/images/img71.png';
import image5 from '../../assets/images/img68.png';
import { useTranslation } from 'react-i18next';
import './Footer.css'; // Include CSS styles

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mahishaindiatechnologies@gmail.com?subject=Get%20a%20Quote&body=Hi%20Mahisha%20India%20Technologies,";
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://wa.me/918110818281', '_blank'); // Opens WhatsApp with the given number in a new tab
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>{t('footer.header')}</h2>
        <p>{t('footer.text')}</p>
        <div className="footer-buttons">
          <button className="footer-btn quote-btn" onClick={handleQuoteClick}>{t('footer.get_a_quote')}</button>
          <a href="/" onClick={handleOpenModal}>
            <button className="footer-btn reach-btn">{t('footer.contact_us')}</button>
          </a>
        </div>
      </div>

      <div className="footer-middle">
        <div className="company-info">
          <h1 className="footer-logo">
            <span className="nexus-info" style={{ color: 'white', fontSize: '28px' }}>Mahisha<span className="highlight"> India</span> Technologies</span>
          </h1>
          <p>{t('footer.company_info')}</p>
          <div className="social-icons">
          <a href="https://instagram.com" className="icon-circle1" target="_blank" rel="noopener noreferrer">
      <img src={image1} alt="Instagram" />
    </a>
    <a href="https://facebook.com" className="icon-circle2" target="_blank" rel="noopener noreferrer">
      <img src={image2} alt="Facebook" />
    </a>
    <a href="https://www.linkedin.com/in/mahisha-india-technologies/" className="icon-circle3" target="_blank" rel="noopener noreferrer">
      <img src={image3} alt="LinkedIn" />
    </a>
    <a href="https://wa.me/918110818281" onClick={handleWhatsAppClick} className="icon-circle4" target="_blank" rel="noopener noreferrer">
      <img src={image4} alt="WhatsApp" />
    </a>
    <a href="mailto:mahishaindiatechnologies@gmail.com" className="icon-circle5" target="_blank" rel="noopener noreferrer">
      <img src={image5} alt="Email" />
    </a>
            
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-link-section">
            <h4>{t('navbar.explore')}</h4>
            <ul>
              <li><a href="/about-us">{t('footer.company_links.about_us')}</a></li>
              <li><a href="/internships">{t('footer.company_links.internships')}</a></li>
              <li><a href="/consultant">{t('footer.company_links.consultant')}</a></li>
              <li><a href="/career">{t('footer.company_links.career')}</a></li>
              <li><a href="/" onClick={handleOpenModal}>{t('footer.company_links.contact_us')}</a></li>
            </ul>
          </div>
          <div className="footer-link-section">
            <h4>{t('navbar.services')}</h4>
            <ul>
              <li><a href="/website-development">{t('footer.services_links.website_services')}</a></li>
              <li><a href="/digital-marketing">{t('footer.services_links.digital_marketing')}</a></li>
              <li><a href="/mobile-applications">{t('footer.services_links.mobile_applications')}</a></li>
              <li><a href="/billing-software">{t('footer.services_links.billing_software')}</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>{t('footer.still_need_help')}</h4>
            <p>
              <a href="mailto:mahishaindiatechnologies@gmail.com" className="email-link">
                <FaEnvelope style={{ marginRight: '10px', fontSize: '1.2rem', color: '#07880F' }} /> 
                mahishaindiatechnologies@gmail.com
              </a>
            </p>
            <p>
              <PhoneIcon style={{ marginRight: '10px', fontSize: '1.2rem', color: '#07880F' }} />
              +91 70949 53135
            </p>
            <p>
              <WhatsAppIcon style={{ marginRight: '10px', fontSize: '1.2rem', color: '#07880F' }} />
              +91 81108 18281
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {t('footer.footer_text')}</p>
      </div>
    </footer>
  );
};

export default Footer;
