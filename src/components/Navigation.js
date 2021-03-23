import React, {useState} from 'react';
import { Link, graphql, useStaticQuery} from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const getLogo = graphql`
query retrieveImage {
    strapiNavigation {
        logo {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 200,
                placeholder: BLURRED
              )
            }
          }
        }
      }
  }
`
const Navigation = () => {
    const data = useStaticQuery(getLogo);
    const image = getImage(data.strapiNavigation.logo.localFile);
    // console.log(image);
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
        <nav className="h-24 flex justify-between items-center px-6 relative">
            <Link to='/' className="z-20">
                <GatsbyImage image={image} alt="this should be dynamic data" />
            </Link>
            <ul className="hidden sm:flex flex-row space-x-6">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/testimonials'>Testimonials</Link></li>
            </ul>

            <div className="sm:hidden z-20" role="button" tabIndex="0" onClick={handleClick}>
                {
                    showMenu 
                        ? <FontAwesomeIcon icon={faTimes} className='fa-2x' />
                        : <FontAwesomeIcon icon={faBars} className='fa-2x' />
                }

            </div>

            <ul id="mobile-menu"
                role="menu"
                tabIndex="0"
                onClick={handleClick}
                className= 
                {`
                    ${showMenu ? "absolute" : "hidden"}
                    bg-white
                    sm:hidden 
                    absolute left-0 top-0
                    full-navbar-height w-full z-10
                    text-s-turquoise text-4xl text-center
                    flex flex-col justify-center space-y-7
                    overscroll-y-contain
                `}
            >
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/testimonials'>Testimonials</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navigation