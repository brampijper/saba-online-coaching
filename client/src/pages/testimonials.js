import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import TestimonialCard from "../components/testimonial/TestimonialCard";
import BgTestimonials from "../images/svg/bg_testimonials.svg";

const getData = graphql`
query getAllTestimonals {
    allStrapiTestimonal {
      testimonals: nodes {
        id
        function
        description {
            data {
                description
            }
        }
        workplace
        imagePhotographer
        imageUnsplashName
        name
        testimonal_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`


const TestimonialPage = () => {
    const data = useStaticQuery(getData);
    const {
        allStrapiTestimonal: { testimonals }
    } = data
    return (
        <Layout>
            <div className="h-auto pb-20 lg:pb-40 relative">    
                <div className="h-auto max-w-screen-lg xl:max-w-screen-xl mx-auto px-6">
                <h2 className="text-center pt-20">
                        View all testimonials
                    </h2>
                    <div className="card-container grid grid-flow-row gap-12 place-content-center mt-32 lg:grid-cols-1 lg:gap-20">
                        {
                            testimonals.map( testimonal => (
                                <TestimonialCard 
                                    key={testimonal.id} 
                                    card={testimonal} 
                                />
                            ))
                        }
                    </div>
                    <BgTestimonials className="w-full h-full absolute top-1/20 md:top-1/20 transform scale-x-220 z-minus" />
                </div>
            </div>
        </Layout>
    )
}

export default TestimonialPage;