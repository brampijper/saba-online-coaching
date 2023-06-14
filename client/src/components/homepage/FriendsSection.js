import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import FriendCard from "../friend/FriendCard";
import { Stripes } from "../svg/Stripes";

const FriendsSection = () => {
    const { strapiHomepage } = useStaticQuery(graphql
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

    const friendCards = friends.map(friend => (
        <FriendCard 
            key={friend.id}
            friend={friend}
        />    
    ))

    return (
        <div className="pt-20 h-auto relative min-h-screen grid md:pt-32 lg:pt-64">    
            
            <div className="mx-auto px-6 place-self-center">
                
                <article className="text-center flex flex-col items-center gap-16 relative">
                    <h2 className="text-4xl">
                        {friends_title}
                    </h2>
                    <p className="max-w-prose">
                        {friends_subtitle}
                    </p>
                    {/* <Stripes className="absolute w-full min-h-screen -top[160px]-z-[1] fill-slate-300" /> */}
                </article>

                <div className="grid grid-flow-row gap-12 place-content-center mt-16 
                    md:mt-32 lg:grid-cols-1 lg:gap-20
                ">
                    {friendCards}
                </div>  
            </div>

            <Stripes className="w-full h-full absolute sm:top-0 md:scale-x-220 z-minus fill-s-purple" />
        </div>
    )
}

export default FriendsSection;