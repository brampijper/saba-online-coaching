import React from 'react';
import { Transition } from '@headlessui/react'
import { Link } from 'gatsby';
import UseLockBodyScroll from "./UseLockBodyScroll.js";

const NavigationMobile = (props) => {
    UseLockBodyScroll(props.showMenu);
    return (
        <Transition
            show={props.showMenu}
            enter="transition-opacity duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <ul id="mobile-menu" className="bg-white absolute left-0 top-0 full-navbar-height w-full z-10 
                                            text-s-turquoise text-4xl text-center
                                            flex flex-col justify-center space-y-7 sm:hidden">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/testimonials'>Testimonials</Link></li>
            </ul>
        </Transition> 
    )
}

export default NavigationMobile