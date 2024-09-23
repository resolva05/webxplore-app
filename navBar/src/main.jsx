import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Service from './components/service/Service.jsx'
import Home from './components/home/Home.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contactus from './components/contactus/Contactus.jsx'
import Service1 from './components/service/subServices/Service1.jsx'
import Service2 from './components/service/subServices/Service2.jsx'
import Service3 from './components/service/subServices/Service3.jsx'
import Blogpage from './components/blogpage/Blogpage.jsx'
import Subblogpage from './components/blogpage/Subblogpage.jsx'
import Faq from './components/faq/Faq.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'service',
        element: <Service />
      }
      ,
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'portfolio',
        element:<Portfolio/>
      },
      {
        path:'',
        element:<Home/>
      }
      ,
      {
        path:'contact',
        element:<Contactus/>
      }
      ,
      {
        path:'/service/subservice1',
        element:<Service1/>
      },
      {
        path:'/service/subservice2',
        element:<Service2/>
      },
      {
        path:'/service/subservice3',
        element:<Service3/>
      },
      {
        path:'/service/subservice1/contact',
        element:<Contactus/>
      },
      {
        path:'/service/subservice2/contact',
        element:<Contactus/>
      }
      ,
      {
        path:'/service/subservice3/contact',
        element:<Contactus/>
      },
      {
        path: "home/blogpage",
        element: <Blogpage/>,
      },
      {
        path: "blogpage",
        element: <Blogpage/>,
      },
      {
        path: "blogpage/subblogpage/:postId",
        element:<Subblogpage/>
      },
      {
        path:"/faq",
        element:<Faq/>
      }
    ]
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
