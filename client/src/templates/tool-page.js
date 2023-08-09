import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';

import Layout from "../components/layout"
import ToolResourceCard from "../components/cards/ToolResourceCard";
import ToolBenefitCards from "../components/cards/ToolBenefitCards";
import ToolInstructionCard from "../components/cards/ToolInstructionCard";

import { setAlpha } from "../components/colorUtils";
import { ThemeContextProvider } from "../components/themeContext";

export default function toolPage({ data }) {
  const { 
    strapiTool: {
      title,
      description: { data: { description } },
      image: { localFile: { publicURL }, alternativeText: alt },
      instructions,
      benefits,
      resources,
      baseColor,
    },
  } = data;

  const colorStyles = {
    baseColor,
    primaryColor: setAlpha(baseColor, 0.3),
    secondaryColor: setAlpha(baseColor, 0.2),
    accentColor: setAlpha(baseColor, 0.05),
    logoColor: baseColor
  }

  const instructionCards = instructions.map( (instruction, index) => (
    <ToolInstructionCard
      key={instruction.id}
      instruction={instruction}
      index={index+1}
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
          md:grid md:grid-cols-3 md:auto-rows-auto md:p-16 md:pb-20 
          lg:gap-16 lg:max-w-screen-xl
        `}>

          <div className="md:col-span-2 flex flex-col gap-y-4">
            <h2 className="text-base">
                {`${title}`}
            </h2>
            <ReactMarkdown 
              className="space-y-6 max-w-prose" 
              linkTarget="_blank"
              children={description} 
            />
            <img 
              src={publicURL} 
              alt={alt}
              className="rounded-lg object-cover min-h-[20rem] w-full mt-4" 
            />

            <h2 className="text-base my-6">
                {`${title} best practise and tips`}
            </h2>

            <article className="flex flex-col gap-6 md:px-6">
                {instructionCards}
            </article>
          </div>

          <div className="space-y-6 md:h-min md:col-start-3 md:row-start-1">
            <ToolBenefitCards 
              benefits={benefits} 
            />
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