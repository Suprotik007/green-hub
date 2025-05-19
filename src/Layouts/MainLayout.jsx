import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Banner from '../Components/banner';
import ActiveGardener from './ActiveGardener';

const MainLayout = () => {
    return (
        <div>
            <header>
<Navbar></Navbar>
<Banner></Banner>

            </header>
            <main>
                <ActiveGardener></ActiveGardener>
            </main>
            
            <Outlet></Outlet>
            <footer>
<Footer></Footer>
            </footer>
            
        </div>
    );
};

export default MainLayout;