import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import BackToTop from './components/BackToTop';

function App() {

  return (
    <>
    
      <Header />
      <Outlet />
      <BackToTop/>
      <Footer />
    </>

  )
}

export default App
