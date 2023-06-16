import React from 'react';
import { Link } from 'gatsby';
import { HeaderTitle } from './svg/HeaderTitle';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center p-6 space-y-32 md:space-y-20 text-white bg-s-purple">

            <Link to="/" className="w-full max-w-xs mt-12">
                <HeaderTitle className=""/>
            </Link>

            <div className="flex flex-row justify-between max-w-xs w-full gap-y-12 text-base">
                <a href="https://www.linkedin.com/in/bram-pijper-5389b0276" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
                <span>|</span>
                
                <a href={`mailto:' + 'brampijper@proton.me`} target="_blank" rel="noreferrer">
                    E-mail
                </a>
                <span>|</span>

                <Link to="/faq">FAQ</Link>
            </div>

            <p className="text-xs">
                This website is designed &amp; built by&nbsp;
                <a href="https://www.brampijper.com/" target="_blank" rel="noreferrer">
                    Bram
                </a>.
                The contents and opinions of this website are those of me.
            </p>

        </footer>
    )
}

export default Footer