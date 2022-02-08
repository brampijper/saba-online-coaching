import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ArrowBounceDown from '../ui/ArrowBounceDown';

const getData = graphql`
query GetHeaderQuoteContent {
    strapiHomepage {
        quote
    }
  }  
`

const HeaderQuote = () => {
    const data = useStaticQuery(getData);
    const { strapiHomepage: { quote } } = data
    return (
        <div className="container mx-auto">
            <div className="px-6 my-20 flex space-x-3 md:max-w-4xl mx-auto">
                <h3 className="relative m-auto text-center leading-relaxed">
                    <span className="font-extrabold	text-3xl mx-1 md:text-5xl font-bold font-gabriela">"</span>
                        {quote}
                    <span className="font-extrabold	text-3xl mx-1 md:text-5xl font-bold font-gabriela">"</span>
                </h3>
            </div>
            <ArrowBounceDown scrollToTarget='#about-me' />
        </div>
    )
}

export default HeaderQuote;