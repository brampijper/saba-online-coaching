import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import MarkdownView from 'react-showdown';

import Layout from '../components/layout';

const getData = graphql`
query GetAboutPageContent {
    strapiAboutPage {
      about_me
      title
      what_ive_done
      takeaway_Title
      aboutme_images {
        alternativeText
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      whativedone_images {
        alternativeText
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      takeaway {
        title
        id
        takeaways
        service {
            id
        }
      }
    }
  }
  
`


const About = () => {
    const data = useStaticQuery(getData);
    const {
        strapiAboutPage: {
            title, about_me, what_ive_done, takeaway, aboutme_images, whativedone_images, takeaway_Title
        }
    } = data;
    return (
        <Layout>
            <div className="text-center h-auto xl:max-w-screen-xl max-w-screen-lg space-y-2 lg:space-y-16
                mx-auto flex flex-col items-center
                ">
                <h2 className="md:my-20 md:block hidden">{title}</h2>

                <div className="grid md:grid-cols-2 px-6 justify-items-center gap-2 place-items-start">
                    
                    <article className="bg-s-purple p-6 md:p-12 border-0 rounded-lg text-white text-sm space-y-8 max-w-prose">
                        <MarkdownView markdown={about_me} className="space-y-6 max-w-prose pb-4" />
                    </article>

                    <div className="grid place-items-start gap-2">
                    {
                        aboutme_images.map( ( { localFile, alternativeText, id }) => {
                            const image = getImage(localFile);
                            return (
                                <GatsbyImage key={id} image={image} alt={alternativeText} className="max-h-96 rounded-lg" />
                            )
                        })
                    }
                    </div>
                </div>


                <div className="grid md:grid-cols-2 px-6 justify-items-center gap-2 place-items-end">
                    
                    <div className="grid grid-rows-2 auto-cols-auto gap-2">
                    {
                        whativedone_images.map( ( { localFile, alternativeText, id }) => {
                            const image = getImage(localFile);
                            return (
                                <GatsbyImage key={id} image={image} alt={alternativeText} className="max-h-96 rounded-lg" />
                            )
                        })
                    }
                    </div>

                    
                    <article className="bg-white p-6 md:p-12 border-2 border-s-gold rounded-lg text-black text-sm space-y-8 max-w-prose">
                        <MarkdownView markdown={what_ive_done} className="space-y-6 max-w-prose" />
                    </article>

                </div>

            </div> 

            <div className="bg-s-gold py-20 lg:py-52">
                <div className="text-center h-auto space-y-16 md:space-y-28 px-8 mx-auto flex flex-col place-items-center xl:max-w-screen-xl max-w-screen-lg">
                    <h2 className="text-white">{takeaway_Title}</h2>

                    <div className="grid grid-flow-row gap-12 place-content-center lg:grid-cols-2 lg:gap-14">
                        {
                            takeaway.map( ({service, takeaways, id, title}) => {
                                return (
                                    <Link to={`/services#${service.id}`} key={id} className="h-auto rounded-lg bg-white shadow-xl relative p-8 space-y-6">
                                        <h4>{title}</h4>
                                        <MarkdownView markdown={takeaways} className="max-w-prose" />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;