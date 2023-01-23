import React from 'react';
import { useStaticQuery, graphql} from 'gatsby';

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
        <a 
            href={'mailto:' + email} 
            className="
                w-full h-12
                flex justify-center items-center
                sm:h-16
                bg-neutral-900 cursor-pointer"
        >
            <p className="text-white text-base px-6 md:flex md:flex-row ">
                <span className="hidden md:block">
                    {`${text}  `}
                </span> 
                <span>
                    {email}
                </span>
            </p>
        </a>
    )
}

export default ContactBar;