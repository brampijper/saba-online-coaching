import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';

import Layout from "../components/layout"
import ToolResourceCard from "../components/cards/ToolResourceCard";
import ToolBenefitCard from "../components/cards/ToolBenefitCard";
import ToolInstructionCard from "../components/cards/ToolInstructionCard";

export default function toolPage({ data }) {
    
    const { strapiTool: {
        title,
        description: { data: { description } },
        image: { localFile: { publicURL }, alternativeText: alt },
        instructions,
        benefits,
        resources
    } } = data;

    const toolBenefitCards = benefits.map( benefit => (
        <ToolBenefitCard
            key={benefit.id}
            benefit={benefit}
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
        <Layout>

            <div className="self-center	h-auto px-8 max-w-screen-lg flex flex-col gap-8
                md:grid md:grid-cols-2 md:px-0 md:pb-20 lg:gap-16
            ">
                
                <div className="w-full
                    md:row-start-1 md:col-start-1 md:col-end-3
                ">
                    <img 
                        src={publicURL} 
                        alt={alt}
                        className="rounded-lg object-cover min-h-[20rem]" 
                    /> 
                </div>

                <article className="flex flex-col gap-6 md:px-8">
                    <h2 className="text-base">{`About ${title}`}</h2>
                    <ReactMarkdown 
                        className="space-y-6 max-w-prose" 
                        linkTarget="_blank"
                        children={description} 
                    />

                    {instructionCards}

                    <div className="space-y-6 md:h-min">
                        <h2 className="text-base mb-8">{`Benefits`}</h2>
                        <div className="flex flex-col gap-6">
                            {toolBenefitCards}
                        </div>
                    </div>

                </article>


                <div className="col-span-full rounded-lg justify-self-end justify-between gap-y-8 h-auto self-center
                    grid grid-cols-1 w-full
                    sm:px-6
                    md:gap-x-8 md:col-start-2 md:row-start-2
                ">
                    {/* <h2 className="col-span-full text-xl text-center"> 
                        Tools and resources
                    </h2> */}
                    {toolResourceCards}

                </div>

            </div>
        </Layout>
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
        }
    }
  }
  `