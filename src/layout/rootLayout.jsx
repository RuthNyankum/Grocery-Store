import React from 'react';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
