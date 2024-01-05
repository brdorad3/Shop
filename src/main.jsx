import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from './Shop.jsx';
import Product from './product.jsx'
import "./index.css"
import Cart from './cart.jsx';

import About from './about.jsx';
import ErrorPage from './errorElement.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage/>,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
