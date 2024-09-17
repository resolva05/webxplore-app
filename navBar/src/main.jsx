import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Service from './components/service/Service.jsx'
import Home from './components/home/Home.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'

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
    ]
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
