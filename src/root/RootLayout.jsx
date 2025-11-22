import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import Footer from '../component/footer';

const RootLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default RootLayout;