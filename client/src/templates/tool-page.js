import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';

import Layout from "../components/layout"
import ToolResourceCard from "../components/cards/ToolResourceCard";
import ToolBenefitCard from "../components/cards/ToolBenefitCard";
import ToolInstructionCard from "../components/cards/ToolInstructionCard";

import { setAlpha } from "../components/colorUtils";
import { ThemeContextProvider } from "../components/themeContext";

export default function toolPage({ data }) {
    const { strapiTool: {
        title,
        description: { data: { description } },
        image: { localFile: { publicURL }, alternativeText: alt },
        instructions,
        benefits,
        resources,
        baseColor,
    } } = data;

    const colorStyles = {
        baseColor,
        primaryColor: setAlpha(baseColor, 0.3),
        secondaryColor: setAlpha(baseColor, 0.2),
        accentColor: setAlpha(baseColor, 0.05),
        logoColor: baseColor
    }

    const toolBenefitCards = benefits.map( (benefit, index) => (
        <ToolBenefitCard
            key={benefit.id}
            benefit={benefit}
            index={index+1}
        />
    ))

    const instructionCards = instructions.map( instruction => (
        <ToolInstructionCard
            key={instruction.id}
            instruction={instruction}
        />
    ) )

    const toolResourceCards = resources.map( (resource, index) => (
        <ToolResourceCard
            key={index}
            resource={resource}
        />
    ))

    return (
        <ThemeContextProvider value={colorStyles}>
            <Layout> 

                <div className={`self-center h-auto p-8 max-w-screen-lg flex flex-col gap-8
                    md:grid md:grid-cols-2 md:p-16 md:pb-20 
                    lg:gap-16 
                    lg:max-w-screen-xl lg:grid-cols-3
                `}>
                    
                    <div className="w-full
                        md:row-start-1 md:col-span-full
                    ">
                        <img 
                            src={publicURL} 
                            alt={alt}
                            className="rounded-lg object-cover min-h-[20rem]" 
                        /> 
                    </div>

                    <article className="flex flex-col gap-6 md:px-8 lg:col-span-2">
                        <h2 className="text-base">{`About ${title}`}</h2>
                        <ReactMarkdown 
                            className="space-y-6 max-w-prose" 
                            linkTarget="_blank"
                            children={description} 
                        />

                        {instructionCards}

                    </article>

                    <div className="space-y-6 md:h-min
                    lg:col-start-3">
                            {/* <h2 className="text-base mb-8">{`Benefits`}</h2> */}
                            <div className="flex flex-col gap-6">
                                {toolBenefitCards}
                            </div>
                    </div>

                    <div className="col-span-full rounded-lg justify-self-end justify-between gap-y-8 h-auto self-center
                        grid grid-cols-1 w-full pt-24
                        sm:pt-28
                        md:gap-x-8
                        lg:grid-cols-2
                        py-16 bg-gradient-to-r from-zinc-50 to-zinc-100
                        relative
                    ">
                        <h2 className="col-span-full absolute text-sm sm:text-md text-center text-black w-full rounded-t-lg py-4 border-b" style={{ backgroundColor: baseColor}}> 
                            Recommended resources
                        </h2>
                        {toolResourceCards}
                    </div>

                </div>
            </Layout>
        </ThemeContextProvider>
    )
}

export const query = graphql`
  query($slug: String!) {
    strapiTool(slug: { eq: $slug } ) {
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
        instructions {
            id
            title
            description {
                data {
                    description
                }
            }
        }
        benefits {
            id
            title
            description {
                data {
                    description
                }
            }
        }
        resources {
            title
            description {
                data {
                    description
                }
            }
            url
        }
        baseColor
    }
  }
  `