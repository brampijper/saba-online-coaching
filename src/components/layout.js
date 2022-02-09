import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ContactBar from './ui/ContactBar';
import { Helmet } from "react-helmet";

const Layout = ({children}) => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <meta name="description" content="An online coaching business by Saba Feronah." />
                <meta name="icon" href="../images/favicon.png" />
                <title>Saba Feronah - Online Coaching</title>  
            </Helmet>
            <ContactBar />
            <Navigation />

            <main className="
                h-auto
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
