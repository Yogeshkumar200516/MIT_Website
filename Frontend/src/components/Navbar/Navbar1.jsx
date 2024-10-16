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
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.svg';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
    }
  };

  const handleNavItemClick = () => {
    setDrawerOpen(false);
  };

  const toggleMobileServicesDropdown = (e) => {
    e.stopPropagation();
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const toggleMobileExploreDropdown = (e) => {
    e.stopPropagation();
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

  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Career', link: '/career' },
  ];

  const exploreItems = [
    { text: 'About Us', link: '/about-us' },
    { text: 'Our Team', link: '/our-team' },
    { text: 'Our Products', link: '/our-products' },
    { text: 'Happy Customers', link: '/happy-customers' },
  ];

  const serviceItems = [
    { text: 'Software Development', link: '/software-development' },
    { text: 'Website Development', link: '/website-development' },
    { text: 'Digital Marketing', link: '/digital-marketing' },
    { text: 'Graphic Design', link: '/graphic-design' },
    { text: 'Mobile Applications', link: '/mobile-applications' },
    { text: 'E-Commerce Solutions', link: '/e-commerce' },
  ];

  // Slider content - Categories for the slider with icons
  const sliderItems = [
    { text: 'Software Consultants', icon: <AutoAwesomeIcon /> },
    { text: 'Websites with high responsiveness', icon: <AutoAwesomeIcon /> },
    { text: 'Attractive User Interface/User Experience', icon: <AutoAwesomeIcon /> },
    { text: '50+ Active Learners', icon: <AutoAwesomeIcon /> },
    { text: 'Call Us and Get free idea for your Business Growth', icon: <AutoAwesomeIcon /> },
    { text: 'E-Commerce Solutions', icon: <AutoAwesomeIcon /> },
  ];

  return (
    <>
      {/* Slider at the top of the Navbar */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(to right, #ffc107, #ffca28, #ffd54f, #ffca28, #ffc107)',
          padding: '6px 0',
          whiteSpace: 'nowrap', // Ensure content doesn't wrap to the next line
          position: 'fixed',
          top: 0,
        }}
      >
        {/* Slider Content */}
        <Box
          sx={{
            whiteSpace: 'nowrap',
            animation: 'scroll 40s linear infinite', // Keyframe for continuous scroll
            marginTop: '0px',
            display: 'flex',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          {/* Duplicate items to make a continuous loop */}
          {[...sliderItems, ...sliderItems].map((item, index) => (
            <Box
              key={index}
              sx={{
                marginRight: '20px',
                fontSize: '1rem',
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
          fontFamily: 'Roboto, sans-serif', // Roboto font applied to the entire navbar
          marginTop: '41px',
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
                  fontWeight: '500',
                  fontSize: '1.1rem',
                  '&:hover': {
                    color: '#00e676',
                  },
                }}
              >
                Explore <ExpandMoreIcon />
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
                    sx={{
                      color: '#fff',
                      padding: '10px 20px',
                      '&:hover': {
                        backgroundColor: '#0C0C6D',
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
                  fontWeight: '500',
                  fontSize: '1.1rem',
                  '&:hover': {
                    color: '#00e676',
                  },
                }}
              >
                Services <ExpandMoreIcon />
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
                    sx={{
                      color: '#fff',
                      padding: '10px 20px',
                      '&:hover': {
                        backgroundColor: '#0C0C6D',
                        borderRadius: '4px',
                      },
                    }}
                  >
                    {service.text}
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
              sx={{
                marginLeft: 'auto',
                textTransform: 'none',
                fontWeight: 'bold',
                backgroundColor: 'white',
                border: '2px solid white',
                color: '#020220',
                borderRadius: '30px',
                transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
                '&:hover': {
                  backgroundColor: '#020220',
                  color: 'white',
                  boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
                },
              }}
            >
              Join Us
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
            <MenuIcon sx={{ fontSize: '30px' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 240, backgroundColor: '#020220', color: 'white', height: '100vh' }}
          role="presentation"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.text} onClick={handleNavItemClick}>
                <Link
                  to={item.link}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    width: '100%',
                    padding: '5px',
                    borderRadius: '10px',
                    fontWeight: '600',
                  }}
                >
                  <ListItemText primary={item.text} />
                </Link>
              </ListItem>
            ))}

            <ListItem button onClick={toggleMobileExploreDropdown}>
              <ListItemText primary="Explore" sx={{ paddingLeft: '5px' }} />
              <ExpandMoreIcon />
            </ListItem>
            <Collapse in={mobileExploreOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {exploreItems.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    sx={{ pl: 3, paddingY: 0.5, width: '100%' }}
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

            <ListItem button onClick={toggleMobileServicesDropdown}>
              <ListItemText primary="Services" sx={{ paddingLeft: '5px' }} />
              <ExpandMoreIcon />
            </ListItem>
            <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {serviceItems.map((service) => (
                  <ListItem
                    button
                    key={service.text}
                    sx={{ pl: 3, paddingY: 0.5, width: '100%' }}
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

            <ListItem button>
              <Button
                variant="contained"
                fullWidth
                onClick={handleNavItemClick}
                sx={{
                  textTransform: 'none',
                  borderRadius: '10px',
                  border: '1px solid white',
                  color: '#020220',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: '#08083B',
                    color: '#FFFFFF',
                  },
                }}
              >
                Join with Us
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
