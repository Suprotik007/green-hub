import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import LoginBox from './pages/LoginBox';
import RegBox from './pages/RegBox';
const router = createBrowserRouter([
  {
    
    path: "/",
    Component: MainLayout,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
    

      
    ]

    
  },
  {
            path:'/login',
           element: <LoginBox></LoginBox>
          },
          {
            path:'/reg',
          element: <RegBox></RegBox>
          },
  

]);
export default router