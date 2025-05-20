import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    
    path: "/",
    Component: MainLayout,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
    {
        

    }

      
    ]
  },
  

]);
export default router