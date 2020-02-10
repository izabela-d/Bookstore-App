import React from 'react';
import PageContainer from "../PageContainer/PageContainer";
import NavBar from '../../features/NavBar/NavBar';
import Footer from "../../features/Footer/Footer";

const MainLayout = ({ children }) => (
    <div>
        <NavBar />
        <PageContainer>
            {children}
        </PageContainer>
        <Footer />
    </div>
);

export default MainLayout;
