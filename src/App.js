import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import User from './User';
import Search from './Search';
import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';



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
                path: "/contact",
                element: <Contact/>,
    
            },
            {
                path: "/about",
                element: <About/>,
    
            },
            {
                path: "/user/:name",
                element: <User/>,
    
            },
            {
                path: "/search",
                element: <Search/>,
    
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