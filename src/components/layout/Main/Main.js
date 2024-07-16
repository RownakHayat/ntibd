import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/navbar/Navbar';
import Footer from '../Footer/Footer';
const Main = () => {

    

    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet> 
            {/* <Footer></Footer> */}
        </>
    );
};

export default Main;