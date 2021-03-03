import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ContactBar from './ContactBar';

const Layout = ({children}) => {
    return (
        <>
            <ContactBar />
            <Navigation />

            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Layout
