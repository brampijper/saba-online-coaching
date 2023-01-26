import React from 'react';
import { Transition } from '@headlessui/react'
import { Link } from 'gatsby';
import UseLockBodyScroll from "./UseLockBodyScroll.js";

const NavigationMobile = (props) => {
    UseLockBodyScroll(props.showMenu);
    return (
        <Transition show={props.showMenu}>
            <ul id="mobile-menu" className="bg-neutral-900 absolute left-0 top-0 full-navbar-height w-full z-10 
                                            text-white text-2xl text-center font-bold
                                            flex flex-col justify-center space-y-12 sm:hidden">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/testimonials'>Testimonials</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
            </ul>
        </Transition> 
    )
}

export default NavigationMobile