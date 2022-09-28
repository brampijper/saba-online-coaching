import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
        <div className="flex flex-col justify-center content-center text-center px-6 pb-6 space-y-16 md:space-y-20 md:pt-20 md:h-auto relative">
            <div className="absolute top-0 left-0 bg-s-turquoise h-10 md:h-20 w-full"></div>
                <div className="flex flex-col space-y-20">
                    <div>
                        <Link to="/" className="inline-flex">
                            <StaticImage src="../images/logo.png" className="mx-auto mt-8 md:mt-0" alt="Saba Feronah logo" layout="fixed" placeholder="blurred" width={275} />
                        </Link>
                    </div>
                    <div className="flex flex-row justify-center space-x-12">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x' />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
                        </a>
                        <a href={`mailto:' + 'Saba.Feronah@gmail.com`} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faAt} className='fa-2x' />
                        </a>
                    </div>
                    <div className="flex space-y-0 flex-row justify-center space-x-6">
                        <Link to="/faq">FAQ</Link>
                        <span className="">|</span>
                        <a href={`mailto:' + 'Saba.Feronah@gmail.com`} target="_blank" rel="noreferrer">Support</a>
                    </div>
                </div>

                <p className="text-xs">This website is designed &amp; built by <a href="https://www.brampijper.com/" target="_blank" rel="noreferrer">Bram</a>. The contents and opinions of this website are those of Saba Feronah.</p>
            </div>
        </>
    )
}

export default Footer