import React from 'react';
import NavBar from '../../features/NavBar/NavBar';
import Footer from "../../features/Footer/Footer";

const MainLayout = ({ children }) => (
    <div>
        <NavBar />
        {children}
        <Footer />
    </div>
);

export default MainLayout;
