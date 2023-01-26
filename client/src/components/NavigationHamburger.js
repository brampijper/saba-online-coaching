import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavigationHamburger = (props) => {

    function onIconClick() {
        props.onClick()
    }
    return (
        <div className="sm:hidden z-20 absolute right-0 px-6">
            {
                props.showMenu 
                    ? <button aria-label="open" onClick={onIconClick}><FontAwesomeIcon icon={faTimes} className='fa-2x text-white' /></button>
                    : <button aria-label="close" onClick={onIconClick}><FontAwesomeIcon icon={faBars} className='fa-2x text-white' /></button>
            }
        </div>
    )
}

export default NavigationHamburger