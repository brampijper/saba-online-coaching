import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from 'react-markdown';

import Layout from "../components/layout"
import UnsplashCredit from "../components/UnsplashCredit";
import ResourceLinks from "../components/ResourceLinks";

export default function toolPage({ data }) {
    
    const { strapiTool: {
        title,
        description: { data: { description } },
        image: { localFile, alternativeText: alt },
        resources
    } } = data;

    const image = getImage(localFile)
    
    return (
        <Layout>

            <div className="h-auto space-y-10 mx-auto p-8 max-w-screen-lg 
                md:grid md:grid-cols-2 md:space-y-12 md:px-6 md:pb-20"
            >
                <h2 className="text-2xl text-left
                    sm:text-5xl sm:mt-12
                    md:text-center md:col-start-1 md:col-end-3
                ">
                    {`Tool: ${title}`}
                </h2>
                
                <div className="place-self-center 
                    md:row-start-2 md:col-start-1 md:col-end-3
                ">
                    <GatsbyImage 
                        image={image} 
                        alt={alt}
                        objectFit="cover"
                        className="rounded-lg self-center max-h-80" 
                    />
                    
                    <UnsplashCredit 
                        photographer="Moritz Kindler" 
                        unsplashName="@moritz_photography"
                        className="mt-0 text-center" 
                        />  
                </div>

                <section>
                    <h4 className="py-2">Description</h4>
                    <ReactMarkdown 
                        className="space-y-6 max-w-prose pb-4" 
                        linkTarget="_blank"
                        children={description} 
                    />

                    <ReactMarkdown 
                        className="space-y-6 max-w-prose pb-4" 
                        linkTarget="_blank"
                        children={description} 
                    />
                </section>

                <ResourceLinks resources={resources}/>

                {/* <div className="w-full md:col-start-1 md:col-end-3 flex flex-col text-left items-center">
                    <h4 className="py-2">Extra</h4>
                    <ReactMarkdown 
                            className="space-y-6 max-w-prose pb-4 text-lg" 
                            children={description} 
                        />
                </div> */}
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
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                    )
                }
            }
        }
        resources {
            youtubeLinks {
                data { youtubeLinks }
            }
            podcastLinks {
                data { podcastLinks }
            }
            blogLinks {
                data { blogLinks }
            }
            appLinks {
                data { appLinks }
            }
        }
    }
  }
  `