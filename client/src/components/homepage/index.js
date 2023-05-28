import React from 'react';
import Header from './Header';
import HeaderQuote from "./HeaderQuote";
import AboutMe from './AboutMe';
import ToolsSection from './ToolsSection';
import TestimonialSection from './TestimonialSection';
import HelpSection from './HelpSection';

const HomeContent = () => {
    return (
        <>
            <Header />
            <HeaderQuote />
            <AboutMe />
            <ToolsSection />
            <TestimonialSection />
            <HelpSection />
        </>
    )
}

export default HomeContent