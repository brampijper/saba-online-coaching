import React, {useState} from 'react';
import { Link } from 'gatsby';

import NavigationMobile from './NavigationMobile';
import { HeaderTitle } from '../svg/HeaderTitle';

const Navigation = ({hideNavLogo = false}) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleNavBar = () => {
        setShowMenu(!showMenu);
    }

    const navBarLogo = (
        <Link to="/" className="w-auto">
            <HeaderTitle className="h-12"/>
        </Link>
    )

    const justifyContent = hideNavLogo ? 'justify-end' : 'justify-between'

    return (
        <nav className={`h-16 flex items-center px-6 relative bg-s-purple lg:h-24 border-none 
            md:border-solid md:border-b-2 md:border-slate-300 ${justifyContent}
        `}>
            {!hideNavLogo && navBarLogo}
            
            <ul className="hidden sm:flex flex-row space-x-6 text-white">
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

            <NavigationMobile 
                showMenu={showMenu}
                handleClick={toggleNavBar} 
            />

        </nav>
    )
}

export default Navigation