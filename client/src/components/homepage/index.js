import React from 'react';
import Header from './Header';
import HeaderQuote from "./HeaderQuote";
import ResourceSection from './ResourceSection';
import ToolsSection from './ToolsSection';
import FriendsSection from './FriendsSection';
import HelpSection from './HelpSection';

const HomeContent = () => {
    return (
        <>
            <Header />
            <HeaderQuote />
            <ResourceSection />
            <ToolsSection />
            <FriendsSection />
            <HelpSection />
        </>
    )
}

export default HomeContent