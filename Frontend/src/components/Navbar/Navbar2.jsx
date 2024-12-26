import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Collapse,
  Paper,
  MenuItem,
} from '@mui/material';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo1.svg';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import image1 from '../../assets/images/language.png';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [language, setLanguage] = useState('English'); // Default language
  const [languageOpen, setLanguageOpen] = useState(false);

  // State to manage selected language
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default selection


  // Load selected language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Handle language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language); // Persist in localStorage
    setLanguageOpen(false); // Close dropdown
    setDrawerOpen(false);
    i18n.changeLanguage(language);
  };


  const isLanguageActive = (selectedLanguage) => {
    return language === selectedLanguage; // Compare the current language with the selected one
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
    
    if (!open) {
      setMobileServicesOpen(false);
      setMobileExploreOpen(false);
      setExploreOpen(false);
      setServicesOpen(false);
      setLanguageOpen(false);
    }
  };

  const handleNavItemClick = () => {
    setDrawerOpen(false);
    setExploreOpen(false);
    setServicesOpen(false);
    setLanguageOpen(false);
  };

  const toggleMobileServicesDropdown = (e) => {
    e.stopPropagation();
    setMobileExploreOpen(false);
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const toggleMobileExploreDropdown = (e) => {
    e.stopPropagation();
    setMobileServicesOpen(false);
    setMobileExploreOpen(!mobileExploreOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.explore-dropdown') && exploreOpen) {
        setExploreOpen(false);
      }
    };

    if (exploreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [exploreOpen]);

  const isActive = (path) => location.pathname === path;
  const isExploreActive = () => exploreItems.some((item) => location.pathname === item.link);
  const isServicesActive = () => serviceItems.some((item) => location.pathname === item.link);


  const navItems = [
    { text: t('navbar.home'), link: '/' },
  ];

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    setDrawerOpen(false);
    window.open('https://wa.me/918110818281', '_blank'); // Opens WhatsApp with the given number in a new tab
  };

  const exploreItems = [
    { text: t('navbar.about_us'), link: '/about-us' },
    { text: t('navbar.our_team'), link: '/our-team' },
  ];

  const serviceItems = [
    { text: t('navbar.website_development'), link: '/website-development' },
    { text: t('navbar.digital_marketing'), link: '/digital-marketing' },
    { text: t('navbar.mobile_applications'), link: '/mobile-applications' },
    { text: t('navbar.billing_software'), link: '/billing-software' },
  ];

  const sliderItems = [
    { text: t('navbar.software_consultants'), icon: <AutoAwesomeIcon /> },
    { text: t('navbar.responsive_websites'), icon: <AutoAwesomeIcon /> },
    { text: t('navbar.ui_ux_design'), icon: <AutoAwesomeIcon /> },
    { text: t('navbar.active_learners'), icon: <AutoAwesomeIcon /> },
    { text: t('navbar.free_idea'), icon: <AutoAwesomeIcon /> },
    { text: t('navbar.ecommerce_solutions'), icon: <AutoAwesomeIcon /> },
  ];

  const languageNamesInEnglish = {
    en: 'English',
    ta: 'Tamil',
    ja: 'Japanese',
    sv: 'Swedish',
    zh: 'Chinese',
    hi: 'Hindi',
    kn: 'Kannada',
    ml: 'Malayalam',
    te: 'Telugu',
  };

  return (
    <>
      {/* Slider at the top of the Navbar */}
      <Box
      position="fixed"
        sx={{
          width: '100%',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(to right, #ffc107, #ffca28, #ffd54f, #ffca28, #ffc107)',
          padding: '6px 0',
          whiteSpace: 'nowrap', // Ensure content doesn't wrap to the next line
          top: 0,
          zIndex: 1200,
        }}
      >
        {/* Slider Content */}
        <Box
          sx={{
            whiteSpace: 'nowrap',
            animation: 'scroll 40s linear infinite', // Keyframe for continuous scroll
            display: 'flex',
            fontFamily: 'Excon',
          }}
        >
          {/* Duplicate items to make a continuous loop */}
          {[...sliderItems, ...sliderItems].map((item, index) => (
            <Box
              key={index}
              sx={{
                marginRight: '20px',
                fontSize: '0.9rem',
                color: '#08083B',
                fontWeight: '500',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <Box sx={{ marginRight: '8px', fontSize: '1rem', color: '#08083B', marginTop: '4px' }}>
                {item.icon}
              </Box>
              {item.text}
            </Box>
          ))}
        </Box>
      </Box>

      <AppBar
        position="fixed"
        sx={{
          backgroundImage: 'linear-gradient(to right, #141E30, #243B55)',
          height: '80px',
          fontFamily: 'Excon',
          marginTop: '41px',
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            alignItems: 'center',
          }}
        >
          {/* Logo with Image */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#fff',
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ height: '50px', marginLeft: '10px', marginBottom: '10px' }}
            />
          </Box>

          {/* Navigation Links for large screens */}
          <Box
  sx={{
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    gap: '20px',
    justifyContent: 'flex-end',
    flexGrow: 1,
    marginRight: '50px',
  }}
>
  {navItems.map((item) => (
    <Button
      key={item.text}
      color="inherit"
      component={Link}
      to={item.link}
      sx={{
        textTransform: 'none',
        fontSize: '1.1rem',
        color: isActive(item.link) ? '#00e676' : 'inherit',
        fontFamily: 'Excon',
        fontWeight: '400',
        '&:hover': {
          color: '#00e676',
        },
      }}
    >
      {item.text}
    </Button>
  ))}

  {/* Explore Dropdown for large screens */}
  <Box
    className="explore-dropdown"
    sx={{ position: 'relative' }}
    onMouseEnter={() => setExploreOpen(true)}
    onMouseLeave={() => setExploreOpen(false)}
  >
    <Button
      color="inherit"
      sx={{
        textTransform: 'none',
        fontWeight: '400',
        fontSize: '1.1rem',
        color: isExploreActive() ? '#00e676' : 'inherit',
        fontFamily: 'Excon',
        '&:hover': {
          color: '#00e676',
        },
      }}
    >
      {t('navbar.explore')} <ExpandMoreIcon />
    </Button>
    <Paper
      elevation={3}
      sx={{
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundImage: 'linear-gradient(to right, #141E30, #243B55)',
        width: '200px',
        zIndex: 10,
        padding: '8px 0',
        maxHeight: exploreOpen ? '300px' : '0',
        overflow: 'hidden',
        opacity: exploreOpen ? 1 : 0,
        transform: exploreOpen ? 'translateY(0)' : 'translateY(-10px)',
        transition: 'all 0.8s ease',
      }}
    >
      {exploreItems.map((item) => (
        <MenuItem
          key={item.text}
          component={Link}
          to={item.link}
          onClick={handleNavItemClick}
          sx={{
            padding: '10px 20px',
            fontFamily: 'Excon',
            color: isActive(item.link) ? '#fff' : '#fff',
            backgroundColor: isActive(item.link) ? '#3949ab' : 'transparent',
            '&:hover': {
              backgroundColor: isActive(item.link) ? '#3949ab' : '#0C0C6D',
              borderRadius: '4px',
            },
          }}
        >
          {item.text}
        </MenuItem>
      ))}
    </Paper>
  </Box>

  {/* Services Dropdown for large screens */}
  <Box
    className="services-dropdown"
    sx={{ position: 'relative' }}
    onMouseEnter={() => setServicesOpen(true)}
    onMouseLeave={() => setServicesOpen(false)}
  >
    <Button
      color="inherit"
      sx={{
        textTransform: 'none',
        fontWeight: '400',
        fontSize: '1.1rem',
        color: isServicesActive() ? '#00e676' : 'inherit',
        fontFamily: 'Excon',
        '&:hover': {
          color: '#00e676',
        },
      }}
    >
      {t('navbar.services')} <ExpandMoreIcon />
    </Button>
    <Paper
      elevation={3}
      sx={{
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundImage: 'linear-gradient(to right, #141E30, #243B55)',
        width: '250px',
        zIndex: 10,
        padding: '8px 0',
        maxHeight: servicesOpen ? '300px' : '0',
        overflow: 'hidden',
        opacity: servicesOpen ? 1 : 0,
        transform: servicesOpen ? 'translateY(0)' : 'translateY(-10px)',
        transition: 'all 0.8s ease',
      }}
    >
      {serviceItems.map((service) => (
        <MenuItem
          key={service.text}
          component={Link}
          to={service.link}
          onClick={handleNavItemClick}
          sx={{
            padding: '10px 20px',
            fontFamily: 'Excon',
            color: isActive(service.link) ? '#fff' : '#fff',
            backgroundColor: isActive(service.link) ? '#3949ab' : 'transparent',
            '&:hover': {
              backgroundColor: isActive(service.link) ? '#3949ab' : '#0C0C6D',
              borderRadius: '4px',
            },
          }}
        >
          {service.text}
        </MenuItem>
      ))}
    </Paper>
  </Box>

  {/* Language Dropdown for large screens */}
  <Box
      className="language-dropdown"
      sx={{ position: 'relative' }}
      onMouseEnter={() => setLanguageOpen(true)}
      onMouseLeave={() => setLanguageOpen(false)}
    >
      {/* Language Button */}
      <Button
        color="inherit"
        sx={{
          textTransform: 'none',
          fontWeight: 400,
          fontSize: '1.1rem',
          color: '#fff',
          fontFamily: 'Excon',
          display: 'flex',
          alignItems: 'center',
          gap: '8px', // Space between icon and text
          '&:hover': {
            color: '#00e676',
          },
        }}
      >
        {/* Language Icon */}
        <Box
          component="img"
          src={image1} // Replace with your image path
          alt="Language Icon"
          sx={{
            width: '24px',
            height: '24px',
            objectFit: 'contain',
          }}
        />

        {/* Selected Language */}
        <Box
          sx={{
            width: '80px', // Fixed width to avoid layout shift
            textAlign: 'left',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {/* Display the current language name in English */}
          {languageNamesInEnglish[i18n.language]} 
        </Box>

        <ExpandMoreIcon />
      </Button>

      {/* Dropdown Menu */}
      <Paper
        elevation={3}
        sx={{
          position: 'absolute',
          top: '100%',
          left: 0,
          backgroundImage: 'linear-gradient(to right, #141E30, #243B55)',
          width: '180px',
          zIndex: 10,
          padding: '8px 0',
          maxHeight: languageOpen ? '235px' : '0',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          opacity: languageOpen ? 1 : 0,
          transform: languageOpen ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.3s ease-in-out',
          borderRadius: '4px',
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar in WebKit-based browsers (Chrome, Safari)
          },
        }}
      >
        {['en', 'ta', 'ja', 'sv', 'zh', 'hi', 'kn', 'ml', 'te'].map((languageOption) => (
          <MenuItem
            key={languageOption}
            onClick={() => handleLanguageChange(languageOption)}
            sx={{
              color: '#fff',
              padding: '10px 20px',
              fontFamily: 'Excon',
              backgroundColor: i18n.language === languageOption ? '#3949ab' : 'transparent',
              '&:hover': {
                backgroundColor: i18n.language === languageOption ? '#3949ab' : '#0C0C6D',
                borderRadius: '4px',
              },
            }}
          >
            {/* Display the language name in English */}
            {languageNamesInEnglish[languageOption]} 
          </MenuItem>
        ))}
      </Paper>
    </Box>


</Box>


          {/* "Join" Button stays in the right corner */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleWhatsAppClick}
              sx={{
                marginLeft: 'auto',
                textTransform: 'none',
                fontWeight: 'bold',
                backgroundColor: 'white',
                border: '2px solid white',
                color: '#020220',
                borderRadius: '30px',
                fontFamily: 'Excon',
                transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
                '&:hover': {
                  backgroundColor: '#020220',
                  color: 'white',
                  boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
                },
              }}
            >
              {t('navbar.contact_us')}
            </Button>
          </Box>

          {/* Hamburger Menu Icon for small screens */}
          <IconButton
            color="inherit"
            edge="end"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, marginLeft: 'auto' }}
          >
            <SortRoundedIcon sx={{ fontSize: '40px', marginRight: '10px' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          width: 240,
          backgroundColor: '#020220',
          color: 'white',
          height: '100vh',
          overflowY: 'scroll',
        }}
        role="presentation"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <List>
          {/* Navigation Items */}
          {navItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={handleNavItemClick}
              sx={{
                borderRadius: '10px',
              }}
            >
              <Link
                to={item.link}
                style={{
                  textDecoration: 'none',
                  color: isActive(item.link) ? '#00e676' : 'inherit',
                  width: '100%',
                  padding: '5px',
                  borderRadius: '10px',
                  fontWeight: '600',
                }}
              >
                <ListItemText primary={t('navbar.home')} />
              </Link>
            </ListItem>
          ))}

          {/* Explore Dropdown */}
          <ListItem
  button
  onClick={toggleMobileExploreDropdown}
  style={{
    color: isExploreActive() ? '#00e676' : 'inherit',
    borderRadius: '10px',
  }}
>
  <ListItemText primary={t('navbar.explore')} sx={{ paddingLeft: '5px' }} />
  <ExpandMoreIcon />
</ListItem>

<Collapse in={mobileExploreOpen} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    {exploreItems.map((item) => (
      <ListItem
        button
        key={item.text}
        sx={{
          pl: 3,
          paddingY: 0.5,
          width: '100%',
          backgroundColor: isActive(item.link) ? '#3949ab' : 'inherit',
          borderRadius: '10px',
        }}
        onClick={handleNavItemClick}
      >
        <Link
          to={item.link}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            width: '100%',
            padding: '5px 14px',
            borderRadius: '10px',
          }}
        >
          <ListItemText primary={item.text} />
        </Link>
      </ListItem>
    ))}
  </List>
</Collapse>


          {/* Services Dropdown */}
          <ListItem button onClick={toggleMobileServicesDropdown}>
            <ListItemText primary={t('navbar.services')} sx={{ paddingLeft: '5px', color: isServicesActive() ? '#00e676' : 'inherit', }} />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {serviceItems.map((service) => (
                <ListItem
                  button
                  key={service.text}
                  sx={{
                    pl: 3,
                    paddingY: 0.5,
                    width: '100%',
                    backgroundColor: isActive(service.link) ? '#3949ab' : 'inherit',
                    borderRadius: '10px',
                  }}
                  onClick={handleNavItemClick}
                >
                  <Link
                    to={service.link}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      width: '100%',
                      padding: '5px 14px',
                      borderRadius: '10px',
                    }}
                  >
                    <ListItemText primary={service.text} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Collapse>

          {/* Language Selector */}
          <ListItem
            button
            onClick={(e) => {
              e.stopPropagation();
              setLanguageOpen(!languageOpen);
            }}
          >
            <ListItemText
              primary={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginLeft: '6px',
                  }}
                >
                  <Box
                    component="img"
                    src={image1}
                    alt="Language Icon"
                    sx={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain',
                    }}
                  />
                  <Box
                    sx={{
                      width: '80px',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                    }}
                  >
                    {languageNamesInEnglish[i18n.language]}
                  </Box>
                </Box>
              }
            />
            <ExpandMoreIcon />
          </ListItem>

          {/* Language Dropdown */}
          <Collapse in={languageOpen} timeout="auto" unmountOnExit>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: '#141E30',
                width: '100%',
                marginTop: '8px',
                padding: '4px 0',
              }}
            >
              {['en', 'ta', 'ja', 'sv', 'zh', 'hi', 'kn', 'ml', 'te'].map((languageOption) => (
                <MenuItem
                  key={languageOption}
                  onClick={() => handleLanguageChange(languageOption)}
                  sx={{
                    color: selectedLanguage === languageOption ? '#00e676' : '#fff',
                    padding: '8px 16px',
                    fontFamily: 'Excon',
                    '&:hover': {
                      backgroundColor: '#0C0C6D',
                      borderRadius: '4px',
                    },
                  }}
                >
                  {languageNamesInEnglish[languageOption]} 
                </MenuItem>
              ))}
            </Paper>
          </Collapse>

          <ListItem button>
                        <Button
                          variant="contained"
                          fullWidth
                          onClick={handleWhatsAppClick}
                          sx={{
                            textTransform: 'none',
                            borderRadius: '10px',
                            border: '1px solid white',
                            color: '#020220',
                            backgroundColor: 'white',
                            fontFamily: 'Excon',
                            '&:hover': {
                              backgroundColor: '#08083B',
                              color: '#FFFFFF',
                            },
                          }}
                        >
                          {t('navbar.join_us')}
                        </Button>
                      </ListItem>
        </List>
      </Box>
    </Drawer>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(2%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
