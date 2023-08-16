import * as React from "react";
import Layout from '../components/layout';
import HomeContent from '../components/homepage';

 const IndexPage = () => {
  return (
      <Layout homePageNav={true}>
          <HomeContent />
      </Layout>
  )
}

export default IndexPage

export const Head = ({location}) => (
  <React.Fragment key={location}>
      <meta name="description" content="Resources for managing your mental health" />
      <meta name="icon" href="../images/favicon.png" />
      <title>Mental Health - A brief intro</title>  
  </React.Fragment>
)