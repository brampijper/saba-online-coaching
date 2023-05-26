import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavigationHamburger = ({showMenu, onClick}) => {

    function onIconClick() {
        onClick()
    }

    const iconOpen = (
        <button aria-label="open" onClick={onIconClick}>
            <FontAwesomeIcon icon={faTimes} className='fa-2x text-white' />
        </button>
    )

    const iconClosed = (
        <button aria-label="close" onClick={onIconClick}>
            <FontAwesomeIcon icon={faBars} className='fa-2x text-white' />
        </button>
    )

    const displayIcon = showMenu ? iconOpen : iconClosed;

    return (
        <div className="sm:hidden z-20 absolute right-0 px-6">
            {displayIcon}
        </div>
    )
}

export default NavigationHamburger