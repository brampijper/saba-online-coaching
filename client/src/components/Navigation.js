import React, {useState} from 'react';
import { Link, graphql, useStaticQuery} from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import NavigationMobile from './NavigationMobile';
import OnHoverChangeText from './OnHoverChangeText';
import NavigationHamburger from './NavigationHamburger';
import { Logo } from './svg/Logo';

const getNavbarContent = graphql`
query retrieveImage {
    strapiNavigation {
        taglines {
          taglines {
              text
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
            // logo: {
            //     alternativeText,
            //     localFile
            // }
        }
    } = data

    // const image = getImage(localFile);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className="h-24 flex items-center justify-between px-6 relative bg-neutral-900">

            <Link to='/' className="z-20">
                <OnHoverChangeText defaultString="aba Feronah" taglines={taglines} />
                <div className="block lg:hidden">
                    {/* <GatsbyImage image={image} alt={alternativeText} /> */}
                    <Logo className="w-[35px] fill-rose-700 bg-black rounded-2xl"/>
                </div>
            </Link>

            <ul className="hidden sm:flex flex-row space-x-6 text-white">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/testimonials'>Testimonials</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
            </ul>

            <NavigationHamburger showMenu={showMenu} onClick={handleClick} />
            <NavigationMobile showMenu={showMenu} />

        </nav>
    )
}

export default Navigation