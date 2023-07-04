import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { HeaderTitle } from './svg/HeaderTitle';

import { ThemeContext } from './themeContext';

const Footer = () => {

    const { secondaryColor, logoColor } = useContext(ThemeContext);

    return (
        <footer 
            className="flex flex-col items-center p-6 space-y-32 md:space-y-20"
            style={{ backgroundColor: secondaryColor }}
        >

            <Link to="/" className="w-full max-w-xs mt-12">
                <HeaderTitle fill={logoColor} />
            </Link>

            <div className="flex flex-row justify-between max-w-xs w-full gap-y-12 text-base">
                <a  href="https://www.linkedin.com/in/bram-pijper-5389b0276" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-zinc-400/5 px-4 py-1 rounded-md hover:bg-zinc-400/10"
                >
                    LinkedIn
                </a>
                
                <a href={`mailto:' + 'brampijper@proton.me`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-zinc-400/5 px-4 py-1 rounded-md hover:bg-zinc-400/10"
                >
                    E-mail
                </a>
                <Link 
                    to="/faq" 
                    className="bg-zinc-400/5 px-4 py-1 rounded-md hover:bg-zinc-400/10"
                >
                    FAQ
                </Link>
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