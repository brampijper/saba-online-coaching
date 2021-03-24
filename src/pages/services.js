import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import ServiceContent from '../components/services/ServiceContent';

const getData = graphql`
query GetServicePageContent {
    strapiServicePage {
        services {
          id
          service {
            title
            price
            id
            description
            price_description
            program_duration
            darkMode
            subjects {
              id
              description
              title
            }
          }
        }
    }
}
`

const ServicePage = () => {
    const data = useStaticQuery(getData);
    const {
        strapiServicePage: {
            services,
        }
    } = data;
    return (
        <Layout>
            {
                services.map( ( service ) => {
                    return (
                        <ServiceContent key={service.id} service={service} />
                    )
                })
            }
        </Layout>
    )
}

export default ServicePage;