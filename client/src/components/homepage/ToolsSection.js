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
            <div className="mx-auto p-16 flex flex-col items-center gap-20 md:gap-32">
                <h2 className="text-white text-left md:text-center">
                    {service_title}
                </h2>

                <Slider className="grid grid-flow-row gap-12 place-content-center lg:grid-cols-2 lg:gap-20">
                    {tools}
                </Slider> 
            </div>
            <Triangles className="w-full h-auto absolute lg:max-w-screen-lg xl:max-w-screen-xl left-0 right-0 ml-auto mr-auto" />
        </div>
    )
}

export default ToolsSection; 