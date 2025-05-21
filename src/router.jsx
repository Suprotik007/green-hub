import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import LoginBox from './pages/LoginBox';
import RegBox from './pages/RegBox';
import ShareGardentip from './pages/ShareGardentip';
import Banner from './Components/banner';
import ActiveGardener from './Layouts/ActiveGardener';
import TrendingTips from './Layouts/TrendingTips';
import Faq from './Layouts/Faq';
import Stats from './Layouts/Stats';
import PrivateRoute from './provider/PrivateRoute';
import BrowseTips from './pages/BrowseTips';
const router = createBrowserRouter([
  {
    
    path: "/",
    Component: MainLayout,
     errorElement: <ErrorPage></ErrorPage>,
   
  },
  {
            path:'/login',
          Component: LoginBox
          },
          {
            path:'/reg',
          Component: RegBox
          },
          {
            path :'/shareTips',
           element: <PrivateRoute>
            <ShareGardentip></ShareGardentip>
           </PrivateRoute>
          },
          {
            path:'/browseTips',
            Component:BrowseTips
          }
  

]);
export default router