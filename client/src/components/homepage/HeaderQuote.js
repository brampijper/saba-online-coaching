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
        <div className="px-6 mx-auto text-center md:max-w-4xl space-y-16">
            <h3>
                <span className="mx-1">
                    "{quote}"
                </span>
            </h3>
            <ArrowBounceDown scrollToTarget='#about-me' />
        </div>
    )
}

export default HeaderQuote;