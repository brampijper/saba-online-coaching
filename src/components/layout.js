import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ContactBar from './ContactBar';

const Layout = ({children}) => {
    return (
        <>
            <ContactBar />
            <Navigation />

            <main className="max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Layout
