import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import TakeAwayCard from './TakeAwayCard';

const getData = graphql`
query GetTakeAwayContent {
    strapiAboutPage {
      takeaway_Title
      takeaway {
        title
        id
        takeaways
        service {
            id
        }
      }
    }
  }
`

const TakeAways = () => {
    const data = useStaticQuery(getData);
    const {
        strapiAboutPage: {
            takeaway, takeaway_Title
        }
    } = data;
    return (
        <div className="bg-s-gold py-20 lg:py-52">
            <div className="text-center h-auto space-y-16 md:space-y-28 px-8 mx-auto flex flex-col place-items-center xl:max-w-screen-xl max-w-screen-lg">
                <h2 className="text-white">{takeaway_Title}</h2>

                <div className="grid grid-flow-row gap-12 place-content-center lg:grid-cols-2 lg:gap-14">
                    {
                        takeaway.map( ({service, takeaways, id, title}) => {
                            return (
                                <TakeAwayCard 
                                    serviceID={service.id}
                                    id={id}
                                    takeaways={takeaways}
                                    title={title}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TakeAways;