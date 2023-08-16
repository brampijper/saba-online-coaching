import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavigationHamburger = ({showMenu, handleClick, homePageNav}) => {

    const icon = showMenu ? faTimes : faBars
    const ariaLabel = showMenu ? "open" : "close"
    const iconColor = homePageNav ? 'text-slate-100' : 'text-gray-800'
    
    return (
        <div className="sm:hidden z-20 absolute right-0 px-6">
            <button 
                aria-label={ariaLabel}
                onClick={handleClick}
            >
                <FontAwesomeIcon 
                    icon={icon} 
                    className={`fa-2x ${iconColor}`} 
                />
            </button>
        </div>
    )
}

export default NavigationHamburger