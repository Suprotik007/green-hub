import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './provider/Authprovider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
