import React from 'react';
import Header from './Header';
import HeaderQuote from "./HeaderQuote";
import AboutMe from './AboutMe';
import ServiceSection from './ServiceSection';
import TestimonialSection from './TestimonialSection';
import HelpSection from './HelpSection';

const HomeContent = () => {
    return (
        <>
            <Header />
            <HeaderQuote />
            <AboutMe />
            <ServiceSection />
            <TestimonialSection />
            <HelpSection />
        </>
    )
}

export default HomeContent