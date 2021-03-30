import React from 'react';
import { useStaticQuery, graphql} from 'gatsby';
import ButtonMailTo from './ButtonMailTo';

const getData = graphql `
query getContactBarContent {
    strapiContactbar {
        text
        email
      }
}
`

const ContactBar = () => {
    const data = useStaticQuery(getData);
    const {
        strapiContactbar: { text, email}
    } = data;

    return (
        <>
            <ButtonMailTo email={email} styles="w-screen h-12 bg-s-turquoise flex justify-start sm:justify-center items-center cursor-pointer">
                <p className="text-white px-6 md:flex md:flex-row ">
                    <span className="hidden md:block">{text}&nbsp;</span> 
                    <span>{email}</span>
                </p>
            </ButtonMailTo>
        </>
    )
}

export default ContactBar;