import * as React from "react";
import Layout from '../components/layout';
import HomeContent from '../components/homepage';

 const IndexPage = () => {
  return (
    <Layout>
        <HomeContent />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
      <meta name="description" content="Resources for managing your mental health" />
      <meta name="icon" href="../images/favicon.png" />
      <title>Mental Health - A brief intro</title>  
  </>
)