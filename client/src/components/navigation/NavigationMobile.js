import React from 'react';
import { Transition } from '@headlessui/react'
import { Link } from 'gatsby';

import UseLockBodyScroll from "./UseLockBodyScroll.js";
import NavigationHamburger from './NavigationHamburger.js';

const NavigationMobile = (props) => {
    
    UseLockBodyScroll(props.showMenu);
    
    const homepageStyle = {
        backgroundColor: '#312B6E'
    }

    const defaultStyle = {
        backgroundColor: props.logoColor
    }

    return (
        <>
            <NavigationHamburger {...props} />
        
            <Transition show={props.showMenu}>
                <ul id="mobile-menu"
                className={`absolute left-0 top-0 full-navbar-height w-full z-10 
                    text-2xl text-center font-bold text-white
                    flex flex-col justify-center space-y-12 sm:hidden`}
                    style={ props.homePageNav ? homepageStyle : defaultStyle}
                >
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/tools'>Tools</Link>
                    </li>
                    <li>
                        <Link to='/friends'>Friends</Link>
                    </li>
                    <li>
                        <Link to='/faq'>FAQ</Link>
                    </li>
                </ul>
            </Transition> 
        </>
    )
}

export default NavigationMobile