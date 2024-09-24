import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import PopUp from './components/popup/PopUp';

function App() {

  return (
    <>
    
      <Header />
      <Outlet />
      {/* <PopUp/> */}
      <BackToTop/>
      <Footer />
    </>

  )
}

export default App
