import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Banner from "./Components/banner";
import ErrorPage from "./pages/ErrorPage";
import ActiveGardener from "./Layouts/ActiveGardener";

const router = createBrowserRouter([
  {
    
    path: "/",
    Component: MainLayout,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
    {
        // path: '/',
        // loader:()=>fetch('/gardeners.json'),
        // Component: ActiveGardener

    }

      
    ]
  },
  

]);
export default router