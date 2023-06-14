import React, {useState} from 'react';
import { Link } from 'gatsby';

import NavigationMobile from './NavigationMobile';
import NavigationHamburger from './NavigationHamburger';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className="h-16 flex items-center justify-end px-6 relative bg-s-purple lg:h-24 border-none 
            md:border-solid md:border-b-2 md:border-slate-300
        ">

            <ul className="hidden sm:flex flex-row space-x-6 text-white">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/tools'>Tools</Link></li>
                <li><Link to='/friends'>Friends</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
            </ul>

            <NavigationHamburger showMenu={showMenu} onClick={handleClick} />
            <NavigationMobile showMenu={showMenu} />

        </nav>
    )
}

export default Navigation