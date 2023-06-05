import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Triangles } from "../svg/Triangles";

import useSlider from '../hooks/useSlider';
import { SliderButton } from '../SliderButton';

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
            tools_title, 
            tools 
        } 
    } = data;
    
    const [onNext, onPrevious, sliderCards] = useSlider(tools)
    
    return (
        <div className="bg-s-purple relative h-auto">
            <div className="
                mx-auto px-6 py-20 h-screen flex flex-col items-center 
                min-h-[900px] sm:min-h-unset
                md:gap-8 md:p-16
            ">
                
                <h2 className="text-white text-left text-4xl md:text-center">
                    {tools_title}
                </h2>

                <div className="relative flex flex-col h-full w-full items-center justify-around
                    lg:flex-row 
                ">
                    <SliderButton onClick={onPrevious} direction="previous" />
                    {sliderCards}
                    <SliderButton onClick={onNext} direction="next" />
                </div>

            </div>
            <Triangles className="w-full h-auto absolute left-0 right-0 ml-auto mr-auto lg:max-w-screen-lg xl:max-w-screen-xl"/>
        </div>
    )
}

export default ToolsSection; 