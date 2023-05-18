import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Navigation />

            <main className="
                space-y-20 
                sm:space-y-32 
                md:space-y-40
                overflow-hidden
            ">
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Layout