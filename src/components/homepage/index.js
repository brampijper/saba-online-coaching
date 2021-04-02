import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import ServiceSection from './ServiceSection';
import TestimonialSection from './TestimonialSection';
import HelpSection from './HelpSection';

const HomeContent = () => {
    return (
        <>
            <Header />
            <AboutMe />
            <ServiceSection />
            <TestimonialSection />
            <HelpSection />
        </>
    )
}

export default HomeContent