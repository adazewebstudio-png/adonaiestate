import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { HeaderProvider } from '../contexts/HeaderContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <HeaderProvider>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </HeaderProvider>
    );
};

export default Layout;
