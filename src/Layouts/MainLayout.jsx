import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Banner from '../Components/banner';
import ActiveGardener from './ActiveGardener';
import TrendingTips from './TrendingTips';
import Faq from './Faq';

const MainLayout = () => {
    return (
        <div>
            <header>
<Navbar></Navbar>
<Banner></Banner>

            </header>
            <main className=' '>
                <ActiveGardener></ActiveGardener>
                <TrendingTips></TrendingTips>
                 <Faq></Faq>
            </main>
            
            <div className=''>
                <Outlet></Outlet>
            </div>
            <footer>
<Footer></Footer>
            </footer>
            
        </div>
    );
};

export default MainLayout;