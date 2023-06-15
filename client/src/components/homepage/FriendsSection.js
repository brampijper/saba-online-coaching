import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import FriendCard from "../cards/FriendCard"
import { Stripes } from "../svg/Stripes"
import { Slider } from "../Slider"

const FriendsSection = () => {
    const { strapiHomepage } = useStaticQuery
    (graphql
        ` query getFriendsSection {
            strapiHomepage {
                friends_title
                friends_subtitle
                friends {
                    id
                    slug
                    job_title
                    name
                    starsign
                    strengths
                    struggles
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
                    tool {
                        title
                        slug
                    }
                }
            }
        }`
    )

    const { friends_title, friends_subtitle, friends } = strapiHomepage;

    return (
        <div className="pt-20 h-auto relative grid gap-12 px-6 md:gap-0 md:pt-32 lg:pt-64">    
                
            <article className="text-center flex flex-col items-center gap-16 relative">
                <h2 className="text-4xl">
                    {friends_title}
                </h2>
                <p className="max-w-prose">
                    {friends_subtitle}
                </p>
            </article>

            <Slider items={friends} styles={`min-h-[800px]`}>
                {FriendCard}
            </Slider>

            <Stripes className="w-full h-full absolute sm:top-0 md:scale-x-220 z-minus fill-s-purple" />
        </div>
    )
}

export default FriendsSection;