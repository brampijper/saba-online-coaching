import React from 'react';
import Header from './Header';
import HeaderQuote from "./HeaderQuote";
import AboutMe from './AboutMe';
import ToolsSection from './ToolsSection';
import FriendsSection from './FriendsSection';
import HelpSection from './HelpSection';

const HomeContent = () => {
    return (
        <>
            <Header />
            <HeaderQuote />
            <AboutMe />
            <ToolsSection />
            <FriendsSection />
            <HelpSection />
        </>
    )
}

export default HomeContent