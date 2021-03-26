import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import ServiceSection from './ServiceSection';
import TestimonialSection from './TestimonialSection';
import HelpSection from './HelpSection';

export default () => {
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