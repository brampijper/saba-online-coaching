import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ContactBar from './ContactBar';

const Layout = ({children}) => {
    return (
        <>
            <ContactBar />
            <Navigation />

            <main className="
                h-auto
                space-y-20 
                sm:space-y-32 
                md:space-y-40 
                lg:space-y-44
                overflow-hidden
            ">
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Layout
