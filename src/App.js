import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import ErrorPage from './ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import './assets/css/style.css';



function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout/>,
          children: [
            {
                path: "",
                element: <Home/>,
    
            },
           
            {
                path: "/about",
                element: <About/>,
    
            },
            {
                path: "/services",
                element: <Services/>,
    
            },
            {
              path: "/contact",
              element: <Contact/>,
  
            },
            {
                path: "*",
                element: <ErrorPage/>,
    
            },
          ]
            
    
        }
       ]);
  return (
   <>
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

   </>
  )
}

export default App