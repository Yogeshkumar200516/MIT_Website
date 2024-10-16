import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Career from '../pages/Career/Career';
import AboutUs from '../pages/Explore/AboutUs';
import OurTeam from '../pages/Explore/OutTeam';
import OurProducts from '../pages/Explore/OurProducts';
import HappyCustomers from '../pages/Explore/HappyCustomers';
import Navbar from '../components/Navbar/Navbar';
import './AppLayout.css';
import SoftwareDevelopment from '../pages/Services/Software';
import WebsiteDevelopment from '../pages/Services/Website';
import MobileApplications from '../pages/Services/Mobile';
import DigitalMarketing from '../pages/Services/DigitalMarketing';
import GraphicDesign from '../pages/Services/Graphic';
import ECommerceSolutions from '../pages/Services/ECommerce';
import Footer from '../components/Footer/Footer';

function AppLayout() {
  return (
    <Router>
      <Navbar />
      <div className='contents' style={{marginTop: '121px', width: '100%'}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/career' element={<Career />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path='/happy-customers' element={<HappyCustomers />} />
        <Route path='/software-development' element={<SoftwareDevelopment />} />
        <Route path='/website-development' element={<WebsiteDevelopment />} />
        <Route path='/mobile-applications' element={<MobileApplications />} />
        <Route path='/digital-marketing' element={<DigitalMarketing />} />
        <Route path='/graphic-design' element={<GraphicDesign />} />
        <Route path='/e-commerce' element={<ECommerceSolutions />} />
      </Routes>
      </div>
    </Router>
  );
}

export default AppLayout;
