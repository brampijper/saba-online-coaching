import React, {useState} from 'react';
import { Link, graphql, useStaticQuery} from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import NavigationMobile from './NavigationMobile';
import OnHoverChangeText from './OnHoverChangeText';
import NavigationHamburger from './NavigationHamburger';

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
        <nav className="h-24 flex items-center justify-between px-6 relative">

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

            <NavigationHamburger showMenu={showMenu} onClick={handleClick} />
            <NavigationMobile showMenu={showMenu} />

        </nav>
    )
}

export default Navigation