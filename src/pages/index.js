import * as React from "react";
import Layout from '../components/layout';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import HelpSection from '../components/HelpSection';

 const IndexPage = () => {
  return (
    <Layout>
        <Header />
        <AboutMe />
        <Services />
        <Testimonials />
        <HelpSection />
    </Layout>
  )
}

export default IndexPage
