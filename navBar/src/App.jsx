import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
// import logo from "../src/assets/logo.jpg"
import Footer from './components/Footer';
import Header from './components/header/Header';
import Cta from './components/cta';
// import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header/>
      <Cta/>
      <Footer/>
    </>

  )
}

export default App
