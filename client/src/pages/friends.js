import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import ProfileCard from "../components/cards/ProfileCard";
import { Stripes } from '../components/svg/Stripes';

const getData = graphql`
query getAllFriends {
    allStrapiFriend {
      friends: nodes {
        id
        job_title
        name
        starsign
        strengths
        struggles
        slug
        tool {
            title
            slug
        }
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


const FriendsPage = () => {
    const data = useStaticQuery(getData);
    const {
        allStrapiFriend: { friends }
    } = data
    return (
        <Layout>
            <div className="h-auto pb-20 lg:pb-40 relative overflow-hidden">    
                <div className="h-auto max-w-screen-lg xl:max-w-screen-xl mx-auto px-6">
                <h2 className="text-center pt-20 text-4xl">
                        All friends
                    </h2>
                    <div className="card-container grid grid-flow-row gap-12 place-content-center mt-32 lg:grid-cols-1 lg:gap-20">
                        {
                            friends.map( friend => (
                                <ProfileCard 
                                    key={friend.id} 
                                    item={friend} 
                                />
                            ))
                        }
                    </div>
                    <Stripes className="w-full h-full absolute sm:top-0 md:scale-x-220 z-minus fill-s-purple" />
                </div>
            </div>
        </Layout>
    )
}

export default FriendsPage;