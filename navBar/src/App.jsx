import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Service from './components/service/Service';
// import Cta from './components/cta';
// import Footer from './components/Footer';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Service/>
    }
  ])

  return (
    <>
      <Header/>
      {/* <Cta/> */}
      {/* <Service/> */}
      <RouterProvider router={router} />
      <Footer/>
    </>

  )
}

export default App
