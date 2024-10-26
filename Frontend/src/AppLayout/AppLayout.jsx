import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Career from '../pages/Career/Career';
import Navbar from '../components/Navbar/Navbar';
import './AppLayout.css';
import DigitalMarketing from '../pages/Services/DigitalMarketing/DigitalMarketing';
import WebsiteDevelopment from '../pages/Services/WebDevelopment/WebDevelopment';
import MobileApplications from '../pages/Services/MobileApplication/Mobile';
import BillingSoftware from '../pages/Services/BillingSoftware/Billing';
import AboutUs from '../pages/Explore/AboutUs/AboutUs';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import OurTeam from '../pages/Explore/OurTeam/OurTeam';

function AppLayout() {
  return (
    <Router>
      <ScrollToTop /> {/* This ensures that the page scrolls to the top on route change */}
      <Navbar />
      <div className='contents' style={{ marginTop: '121px', width: '100%' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/career' element={<Career />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path='/digital-marketing' element={<DigitalMarketing />} />
          <Route path='/website-development' element={<WebsiteDevelopment />} />
          <Route path='/mobile-applications' element={<MobileApplications />} />
          <Route path='/billing-software' element={<BillingSoftware />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppLayout;
