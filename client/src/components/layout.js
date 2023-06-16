import React from 'react';
import Navigation from './navigation/Navigation';
import Footer from './Footer';

const Layout = ({children, hideNavLogo}) => {
    return (
        <div>
            <Navigation hideNavLogo={hideNavLogo} />
            <main className="flex flex-col justify-center w-full mb-16 space-y-32">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout