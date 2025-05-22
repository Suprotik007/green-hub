import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import LoginBox from './pages/LoginBox';
import RegBox from './pages/RegBox';
import ShareGardentip from './pages/ShareGardentip';
import PrivateRoute from './provider/PrivateRoute';
import BrowseTips from './pages/BrowseTips';
import TipDetails from './pages/TipDetails';
import MyTips from './pages/MyTips';
import EditTip from './pages/EditTip';
import AllGardeners from './pages/AllGardeners';

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
          },
        {
          path:'/tipDetails/:_id',
          element: <PrivateRoute>
            <TipDetails></TipDetails>
           </PrivateRoute>
        },
        {
          path:'/myTips',
          element: <PrivateRoute> 
            <MyTips></MyTips>
           </PrivateRoute>
        },
        {
          path:'/editTip/:id',
          loader:({params})=>fetch(`http://localhost:3000/shareTips/${params.id}`),
          element: <PrivateRoute> 
            <EditTip></EditTip>
           </PrivateRoute>
        },
        {
          path: '/explore',
          Component: AllGardeners
        }
  

]);
export default router