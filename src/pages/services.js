import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import ServicePageContent from '../components/service/ServicePageContent';

const getData = graphql`
query MyQuery {
    strapiServicePage {
        id
        services {
            title
            description
            id
            price
            program_duration
            darkMode
            subject {
            title
            description
            id
            }
        }
    }
  }
`

const ServicePage = () => {
    const data = useStaticQuery(getData);
    const { 
        strapiServicePage: { 
            services
        } 
    } = data;

    return (
        <Layout>
            <ServicePageContent services={services} />
        </Layout>
    )
}

export default ServicePage;