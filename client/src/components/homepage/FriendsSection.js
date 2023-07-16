import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProfileCard from "../cards/ProfileCard"
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

    const showSlider = friends.length > 1 ? true : false;

    const sliderElem = (
        <Slider 
            items={friends} 
            styles={`min-h-[800px]`}
        >
            {ProfileCard}
        </Slider> 
    )

    const singleProfileCard = friends.map( friend => (
        <ProfileCard 
            key={friend.id} 
            item={friend} 
            cardStyles={'lg:max-w-5xl mt-16 place-self-center'} 
        />
    ))

    return (
        <div className="pt-20 h-auto relative grid gap-12 px-6 md:gap-0 md:pt-32 lg:pt-64 overflow-hidden">    
                
            <article className="text-center flex flex-col items-center gap-16 relative">
                <h2 className="text-4xl">
                    {friends_title}
                </h2>
                <p className="max-w-prose">
                    {friends_subtitle}
                </p>
            </article>

            { showSlider ? sliderElem : singleProfileCard }

            <Stripes className="w-full h-full absolute sm:top-0 md:scale-x-220 xl:scale-x-300 z-minus fill-s-turquoise-light" />
        </div>
    )
}

export default FriendsSection;