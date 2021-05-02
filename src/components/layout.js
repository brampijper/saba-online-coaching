import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ContactBar from './ContactBar';
import { Helmet } from "react-helmet";

const Layout = ({children}) => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <meta name="description" content="An online coaching business by Sofia Kakkava." />
                <meta name="icon" href="../images/favicon.png" />
                <title>Sofia Kakkava - Online Coaching</title>  
            </Helmet>
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
