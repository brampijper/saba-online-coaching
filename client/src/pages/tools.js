import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import ToolCarouselCard from '../components/cards/ToolCarouselCard';

const getData = graphql`
query MyQuery {
    allStrapiTool {
      nodes {
        id
        slug
        title
        image {
          alternativeText
          localFile {
            publicURL
          }
        }
        description {
          data {
            description
          }
        }
      }
    }
  }
`

const ToolsPage = () => {
    const data = useStaticQuery(getData);
    const { 
        allStrapiTool: { 
            nodes: tools
        } 
    } = data;
    
    const toolCards = tools.map( tool => {
      return (
        <ToolCarouselCard 
          key={tool.id}
          item={tool}
        />
      )
    })

    return (
        <Layout>
            <h1 className=" px-6 text-3xl mt-14 md:text-6xl text-center md:mt-28"> Overview of all tools </h1>
            <div className="px-6 flex flex-row flex-wrap gap-12 md:px-16 pb-48 mx-auto justify-center">
              {toolCards}
            </div>
        </Layout>
    )
}

export default ToolsPage;