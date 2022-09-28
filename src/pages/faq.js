import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Accordion from '../components/Accordion';

const getData = graphql`
query getStrapiFaqContent {
    strapiFaqPage {
        faqs: faqtest
    }
}
`

const Faq = () => {
    const data = useStaticQuery(getData);
    const {
        strapiFaqPage: {
            faqs
        }
    } = data
    return (
        <Layout>
            <div className="mx-auto text-center flex flex-col space-y-12 md:space-y-32 m-16 md:m-24">
                <h2 className="mb-4">Frequent Questions &amp; Answers</h2>
                <div className="px-8 flex flex-col space-y-12 h-auto max-w-screen-lg mx-auto text-left">
                    <section className="shadow">
                        {
                            faqs.map( ( {id, question, answer}) => {
                                return <Accordion key={id} question={question} answer={answer} />
                            })
                        }
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default Faq;