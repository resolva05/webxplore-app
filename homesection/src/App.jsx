import 'bootstrap/dist/css/bootstrap.min.css';
// import Pricing from './components/pricingSection/Pricing';
// import Contactus from './components/contactus/Contactus';
// import Home from './components/home/Home';
// import Contactus from './components/contactus/Contactus';
// import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/home/Testimonials';
import { Outlet } from 'react-router-dom';
import Header from '../../homesection/src/components/header/Header';
// import BackToTop from '../../homesection/src/components/BackToTop';
import Footer from '../../homesection/src/components/footer/Footer';
import Chatbot from './components/chatbot/Chatbot';
// import HeroSection from './components/heroSection/HeroSection';
function App() {



  return (
    <>
      <Header />
      <Chatbot/>
      {/* <HeroSection/> */}
      <Outlet />
      {/* <BackToTop /> */}
      <Footer />
    </>
  )
}

export default App
