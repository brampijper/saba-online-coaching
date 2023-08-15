import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';

import Layout from "../components/layout"
import ToolResourceCard from "../components/cards/ToolResourceCard";
import ToolBenefitCards from "../components/cards/ToolBenefitCards";
import ToolInstructionCard from "../components/cards/ToolInstructionCard";

import { Slider } from "../components/Slider";

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

  const toolResourceCards = resources.map( (resource, index) => (
    <ToolResourceCard
      key={index}
      resource={resource}
    />
  ))

  return (
    <ThemeContextProvider value={colorStyles}>
      <Layout>
        <section className="space-y-24 flex flex-col my-24">
          <div className={`self-center h-auto max-w-screen-lg flex flex-col gap-8
            lg:grid lg:grid-cols-3 lg:auto-rows-auto 
            xl:gap-16 xl:max-w-screen-xl
          `}>

            <div className="lg:col-span-2 flex flex-col gap-y-4">
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
            </div>

            <div className="space-y-6 lg:h-min lg:col-start-3 lg:row-start-1">
              <ToolBenefitCards 
                benefits={benefits} 
              />
            </div>
          </div>

          <div className="w-auto flex flex-col items-center overflow-hidden p-16 gap-6" style={{backgroundColor: baseColor}}>
              <h2 className="text-md text-white mt-6 text-center">
                {`${title} - Best practise & tips`}
              </h2>

              <Slider 
                items={instructions} 
                styles={``}
              >
                {ToolInstructionCard}
              </Slider>   
          </div>

          <div className="self-center max-w-screen-lg xl:max-w-screen-xl flex flex-wrap place-content-center gap-y-12">
              <h2 className="text-md text-gray-800 text-center w-full">
                {`${title} - Extra resources`}
              </h2>
            {toolResourceCards}
          </div>
        </section>
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