import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaGithub, FaBars  } from 'react-icons/fa';

const Navbar = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <Wrapper>
            <div className="nav-container">
                <div className="nav-header">
                    <h3 onClick={toggleHome}>Brian Sahota</h3>
                    <button className="nav-toggle">
                        <FaBars />
                    </button>
                </div>
                <div className="links-container">
                    <ul className="links">
                        <NavLink to='portfolio' 
                            spy={true} smooth={true}
                            offset={-80}duration={700}
                            >Projects</NavLink>

                            <NavLink to='about'
                            spy={true} smooth={true}
                            offset={-80}duration={700}
                            >About</NavLink>

                            <NavLink to='contact'
                            spy={true} smooth={true}
                            offset={-80}duration={700}
                            >Contact</NavLink>
                    </ul>
                </div>
                <ul className='social-icons'>
                    <li>
                        <a href="https://github.com/scratchytube"><FaGithub /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/bsahota"><FaLinkedin /></a>
                    </li>
                </ul>
            </div>
        </Wrapper>
    )
}



export default Navbar

const NavLink = styled(Link)`
color: black;
font-size: 1.25rem;
padding-right: 20px;
display: inline;
cursor: pointer;

&:hover {

}
`

const Wrapper = styled.nav`
position: sticky;
top: 0;
width: 100%;
height: 80px;
background-color: #fafafa;
z-index: 1;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

.nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.35rem;
    letter-spacing: 0.2rem;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
}

.nav-toggle {
    color:black;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 22px;
}

.social-icons {
    display: none;
}

.links-container {
    display: none;
}


@media screen and (min-width: 800px) {
    .nav-container {
        max-width: 1480px;
        height: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }

    .links-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 3.75rem;
    }

    .nav-header {
        padding: 0;
    }

    .nav-toggle {
        display: none;
    }

    .social-icons {
        display: flex;
        align-items: center;
        padding-right: 1rem;
        list-style: none;
        font-size: 20px;
    }

    .social-icons a {
        color: black;
        margin: 0 0.5rem;
        
    }

}


`

















// const NavContainer = styled.div`

// @media screen and (min-width: 800px) {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem;
//     height: 80px;
//     z-index: 1;
// }
// `

// const NavHeader = styled.div`

// `

// const Logo = styled.h3`

// `

// const MobileBurger = styled.button`

// `

// const LinksContainer = styled.div`

// `

// const SocialIcons = styled.ul`

// `

// const NavUl = styled.div`
// list-style: none;
// text-align: right;
// `


