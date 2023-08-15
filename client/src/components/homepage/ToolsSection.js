import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Triangles } from "../svg/Triangles";
import ToolCarouselCard from '../cards/ToolCarouselCard';
import { Slider } from '../Slider';

const getData = graphql`
    query getHomepageTools {
        strapiHomepage {
            tools_title
            tools {
                slug
                id
                title
                description {
                    data {
                        description
                    }
                }
                image {
                    alternativeText
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`

const ToolsSection = () => {
    const data = useStaticQuery(getData)
    
    const { 
        strapiHomepage: { 
            tools_title, 
            tools 
        } 
    } = data;
        
    return (
        <div className="bg-s-purple relative h-auto grid gap-12 pt-16 pb-16 sm:px-6 sm:pb-32">
                
            <h2 className="text-white text-4xl text-center ">
                {tools_title}
            </h2>

            <Slider items={tools}>
                {ToolCarouselCard}
            </Slider>

            <Triangles className="w-full h-auto absolute left-0 top-full z-[1] right-0 ml-auto mr-auto lg:max-w-screen-lg xl:max-w-screen-xl" />
        </div>
    )
}

export default ToolsSection; 