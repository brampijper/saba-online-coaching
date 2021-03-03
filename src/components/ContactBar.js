import React from 'react';
import ButtonMailTo from './ButtonMailTo';

const ContactBar = () => {
    return (
        <>
            <ButtonMailTo email="hello@sofia.com" styles="w-screen h-28 md:h-12 bg-s-turquoise flex justify-center items-center cursor-pointer">
                <p className="text-white text-center flex flex-col md:flex-row ">
                    <span>Contact me now:&nbsp;</span> 
                    <span>kakkava.sofia@gmail.com</span>
                </p>
            </ButtonMailTo>
        </>
    )
}

export default ContactBar;