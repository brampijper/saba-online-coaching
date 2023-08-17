import React from 'react';
import Header from './Header';
import HeaderQuote from "./HeaderQuote";
import ResourceSection from './ResourceSection';
import ToolsSection from './ToolsSection';
import FriendsSection from './FriendsSection';
import HelpSection from './HelpSection';

const HomeContent = () => {
    return (
        <section className="space-y-32">
            <Header />
            <ResourceSection />
            <ToolsSection />
            <HeaderQuote />
            <FriendsSection />
            <HelpSection />
        </section>
    )
}

export default HomeContent