import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}

export default App
