import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import Service1 from './components/service/subServices/Service1';

function App() {


  return (
    <>
      <Header />
      <Outlet />
      {/* <Service1/> */}
      <Footer />
    </>

  )
}

export default App
