import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
        <div className="flex flex-col justify-center content-center text-center space-y-20 p-8 md:p-20 relative">
            <div className="absolute top-0 left-0 bg-s-turquoise h-20 w-full"></div>
                <div className="flex flex-col space-y-16">
                    <StaticImage src="../images/logo.png" className="mx-auto mt-8 md:mt-0" alt="Sofia Kakkava logo" layout="fixed" placeholder="blurred" width={275} />
                    <div className="flex flex-row justify-center space-x-12">
                        <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x' />
                        <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
                        <FontAwesomeIcon icon={faAt} className='fa-2x' />
                    </div>
                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-6">
                        <Link to="/">FAQ</Link>
                        <span className="hidden md:block">|</span>
                        <Link to="/">Support</Link>
                        <span className="hidden md:block">|</span>
                        <Link to="/">Terms of Use</Link>
                        <span className="hidden md:block">|</span>
                        <Link to="/">Privacy Policy</Link>
                    </div>
                </div>

                <p className="text-xs">This website is designed &amp; built by bram builds. The contents and opinions of this website are those of Sofia Kakkava.</p>
            </div>
        </>
    )
}

export default Footer