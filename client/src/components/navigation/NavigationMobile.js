import React from 'react';
import { Transition } from '@headlessui/react'
import { Link } from 'gatsby';

import UseLockBodyScroll from "./UseLockBodyScroll.js";
import NavigationHamburger from './NavigationHamburger.js';

const NavigationMobile = ({showMenu, handleClick}) => {
    
    UseLockBodyScroll(showMenu);
    
    return (
        <>
            <NavigationHamburger 
                showMenu={showMenu} 
                handleClick={handleClick} 
            />
        
            <Transition show={showMenu}>
                <ul id="mobile-menu"
                className="bg-black absolute left-0 top-0 full-navbar-height w-full z-10 
                    text-white text-2xl text-center font-bold
                    flex flex-col justify-center space-y-12 sm:hidden
                ">
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