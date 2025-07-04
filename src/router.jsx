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
import DashboardLayout from './DashBoardLayout/DashBoardLayout';

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
          path:'/editTip/:id',
          loader:({params})=>fetch(`https://graden-explorer-server.vercel.app/shareTips/${params.id}`),
          element: <PrivateRoute> 
            <EditTip></EditTip>
           </PrivateRoute>
        },
        {
          path: '/explore',
          Component: AllGardeners
        },
        {
    path: '/dashboard',
  //  Component:DashboardLayout,
  element: <PrivateRoute>
    <DashboardLayout></DashboardLayout>
  </PrivateRoute>,
  
    children: [
      {
  index: true,
  
  Component:MainLayout
},

      {
          path:'myTips',
          element: <PrivateRoute> 
            <MyTips></MyTips>
           </PrivateRoute>
        },
        {
            path :'shareTips',
           element: <PrivateRoute>
            <ShareGardentip></ShareGardentip>
           </PrivateRoute>
          },
    ]
  }
  

]);
export default router