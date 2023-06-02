import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Triangles } from "../svg/Triangles";
import { Slider } from "../Slider"; 

const getData = graphql`
    query getHomepageTools {
        strapiHomepage {
            service_title
            tools {
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
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                            )
                        }
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
            service_title, 
            tools 
        } 
    } = data;

    return (
        <div className="bg-s-purple relative h-auto">
            <div className="
                mx-auto px-6 py-20 h-screen flex flex-col items-center gap-16 
                min-h-[900px] sm:min-h-unset
                md:gap-8 md:p-16
            ">
                
                <h2 className="text-white text-left text-4xl md:text-center">
                    {service_title}
                </h2>
                
                <Slider> 
                    {tools}
                </Slider> 
            </div>
            <Triangles className="w-full h-auto absolute left-0 right-0 ml-auto mr-auto lg:max-w-screen-lg xl:max-w-screen-xl"/>
        </div>
    )
}

export default ToolsSection; 