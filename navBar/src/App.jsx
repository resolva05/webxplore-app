import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import PopUp from './components/popup/PopUp';
import Cookies from './components/cookie/Cookie.jsx'
import Chatbot from './components/chatbot/Chatbot.jsx'

function App() {

  return (
    <>
    
      <Header />
      <Outlet />
      <Cookies/>
      <Chatbot/>
      {/* <PopUp/> */}
      <BackToTop/>
      <Footer />
    </>

  )
}

export default App
