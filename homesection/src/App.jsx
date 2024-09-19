import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/home/Home';
// import Contactus from './components/contactus/Contactus';
// import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/home/Testimonials';
import { Outlet } from 'react-router-dom';

function App() {

  

  return (
      <div>
        {/* <Header/>
        <Blogpage/> */}
        {/* <Contactus/> */}
        {/* <Home/> */}
         {/* <Portfolio/> */}
        
         {/* <Testimonials/> */}
        {/* <Header/> */}
        <Outlet/>
      </div>
  )
}

export default App
