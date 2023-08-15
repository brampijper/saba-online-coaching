import React, { useContext } from 'react';
import Navigation from './navigation/Navigation';
import Footer from './Footer';

import { ThemeContext } from './themeContext';

export default function Layout ({children, homePageNav}) {

   const { primaryColor } = useContext(ThemeContext)

    return (
        <>
            <Navigation homePageNav={homePageNav} />
            
            <main 
                className={`flex flex-col justify-center w-full`}
                style={{ backgroundColor: primaryColor}}
            >
                {children}
            </main>
            
            <Footer />
        </>
    )
}