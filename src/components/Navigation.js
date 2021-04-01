import React, {useState} from 'react';
import { Link, graphql, useStaticQuery} from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import OnHoverChangeText from './OnHoverChangeText';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const getNavbarContent = graphql`
query retrieveImage {
    strapiNavigation {
        taglines {
          taglines {
              text
          }
        }
        logo {
          alternativeText
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
    const data = useStaticQuery(getNavbarContent);
    const [showMenu, setShowMenu] = useState(false);

    const {
        strapiNavigation: {
            taglines: {
                taglines
            },
            logo: {
                alternativeText,
                localFile
            }
        }
    } = data

    const image = getImage(localFile);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
        <nav className="h-24 flex justify-between items-center px-6 relative">

            <Link to='/' className="z-20">
                <OnHoverChangeText className="hidden lg:flex lg:flex-row text-black" defaultString="ofia Kakkava" taglines={taglines} />
                <GatsbyImage className="block lg:hidden" image={image} alt={alternativeText} />
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