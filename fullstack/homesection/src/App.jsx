import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Pricing from './components/pricingSection/Pricing';
// import Contactus from './components/contactus/Contactus';
// import Home from './components/home/Home';
// import Contactus from './components/contactus/Contactus';
// import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/home/Testimonials';
import { Outlet,useLocation  } from 'react-router-dom';
import Header from '../../homesection/src/components/header/Header';
// import BackToTop from '../../homesection/src/components/BackToTop';
import Footer from '../../homesection/src/components/footer/Footer';
import Chatbot from './components/chatbot/Chatbot';
// import CookiesPolicy from './components/cookiePolicy/CookiesPolicy';
// import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';
// import TermsConditions from './components/tnc/TermsConditions';
import Cookie from './components/cookie/Cookie';
// import PopUp from './components/popup/PopUp';
// import HeroSection from './components/heroSection/HeroSection';
function App() {
  const location = useLocation(); // Access the current location (route)

  // Function to update document title dynamically based on the page
  const getTitle = (path) => {
    const pageNames = {
      '/': 'Home',
      '/home': 'Home',
      '/service': 'Service',
      '/portfolio': 'Portfolio',
      '/casestudy': 'Case Study',
      '/pricing': 'Pricing',
      '/contact': 'Contact',
      '/home/blogpage': 'Blogpage',
      '/aboutus': 'About Us',
      '/services': 'Our Services',
      '/service/webdevelopment':'Web Dev',
      '/service/mobiledevelopment':'Mobile Dev',
      '/service/otherservices':'Others',
      '/service/webdevelopment/contact':'Contact Us',
      '/service/mobiledevelopment/contact':'Contact Us',
      '/service/otherservices/contact':'Contact Us',
      '/portfolio/contact':'Contact Us',
      '/webdevelopment':'Web Development',
      'mobiledevelopment':'Mobile Development',
      '/faq/contact':'Contact Us',
      '/aboutus/service/webdevelopment':'Web Dev',
      '/aboutus/service/mobiledevelopment':'Mobile Dev',
      '/aboutus/service/otherservices':'Others',
      '/webdevelopment/contact':'Contact Us',
      '/mobiledevelopment/contact':'Contact Us',
      '/blogpage':'Blogpage',
      '/faq':'FAQ',
      '/privacypolicy':'Privacy Policy',
      '/termsandcondtion':'T & C',
      '/cookiespolicy':'Cookies Policy',
      '/sitemap':'Sitemap',
      // Add more routes as needed
    };

    // Return the page title with "WebXplore Studio" prefix
    return pageNames[path] ? `WebXplore Studio | ${pageNames[path]}` : 'WebXplore Studio';
  };

  // Update document title when the route changes
  React.useEffect(() => {
    document.title = getTitle(location.pathname);
  }, [location]);


  return (
    <>
      <Header />
      <Chatbot/>
      <Cookie/>
      {/* <PrivacyPolicy/> */}
     {/* <CookiesPolicy/> */}
      {/* <TermsConditions/> */}
      {/* <HeroSection/> */}
      <Outlet />
      {/* <PopUp/> */}
      {/* <BackToTop /> */}
      <Footer />
    </>
  )
}

export default App
