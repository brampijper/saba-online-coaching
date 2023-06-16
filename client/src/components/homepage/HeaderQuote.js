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
        <div className="mx-auto text-center max-w-4xl px-6 space-y-20">
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