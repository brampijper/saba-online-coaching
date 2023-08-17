import React, {useState, useContext} from 'react';
import { Link } from 'gatsby';

import NavigationMobile from './NavigationMobile';
import { HeaderTitle } from '../svg/HeaderTitle';
import { ThemeContext } from '../themeContext';

const Navigation = ({homePageNav = false}) => {
    const [showMenu, setShowMenu] = useState(false);

    const { secondaryColor, logoColor } = useContext(ThemeContext); 

    const toggleNavBar = () => {
        setShowMenu(!showMenu);
    }

    const navBarLogo = (
        <Link to="/" className="w-auto">
            <HeaderTitle className="h-12" fill={logoColor} />
        </Link>
    )

    const homePageNavStyles = 'justify-center border-none text-white md:border-solid md:border-b-2 md:border-slate-300';
    const defaultStyles = `justify-between text-slate-800`

    return (
        <nav className={`h-24 flex items-center px-6 relative ${homePageNav ? homePageNavStyles : defaultStyles}`}
            style={{ backgroundColor: `${homePageNav ? '#312B6E' : secondaryColor}` }}
        >
            {!homePageNav && navBarLogo}
            
            <ul className="hidden sm:flex flex-row space-x-8 lg:space-x-16">
                <Link to='/'>
                    <li className="bg-zinc-400/10 px-4 py-1 rounded-md hover:bg-zinc-400/25">
                        Home
                    </li>
                </Link>
                
                <Link to='/tools'>
                    <li className="bg-zinc-400/10 px-4 py-1 rounded-md hover:bg-zinc-400/25">
                        Tools
                    </li>
                </Link>
                
                <Link to='/friends'>
                    <li className="bg-zinc-400/10 px-4 py-1 rounded-md hover:bg-zinc-400/25">
                        Friends
                    </li>
                </Link>
                
                <Link to='/faq'>
                    <li className="bg-zinc-400/10 px-4 py-1 rounded-md hover:bg-zinc-400/25">
                        FAQ
                    </li>
                </Link>
            </ul>

            <NavigationMobile 
                showMenu={showMenu}
                handleClick={toggleNavBar}
                homePageNav={homePageNav}
                logoColor={logoColor}
            />
        </nav>
    )
}

export default Navigation