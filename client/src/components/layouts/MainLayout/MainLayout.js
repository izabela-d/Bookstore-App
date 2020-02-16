import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import NavBar from '../../features/NavBar/NavBar';
import Footer from '../../features/Footer/Footer';
import './MainLayout.scss';

const MainLayout = ({ children }) => (
    <div className={'site'}>
        <div className={'main-container'}>
            <NavBar />
            <PageContainer>
                {children}
            </PageContainer>
        </div>
        <Footer />
    </div>
);

export default MainLayout;
