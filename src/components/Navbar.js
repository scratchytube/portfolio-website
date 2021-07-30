import React from 'react'
import styled from 'styled-components'
import { Divide as Hamburger } from 'hamburger-react'
import { Link, animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaGithub  } from 'react-icons/fa';

const Navbar = () => {
    return (
        <Wrapper>
            <NavContainer>
                <NavHeader>
                    <Logo>Brian Sahota</Logo>
                    <MobileBurger>
                        <Hamburger size={20}/>
                    </MobileBurger>
                </NavHeader>
                <LinksContainer>
                    <NavUl>
                        <NavLink to='portfolio' 
                        spy={true} smooth={true}
                        offset={-80}duration={500}
                        >Projects</NavLink
                        >
                        <NavLink to='about'
                        spy={true} smooth={true}
                        offset={-80}duration={500}
                        >About</NavLink
                        >
                        <NavLink to='contact'
                        spy={true} smooth={true}
                        offset={-80}duration={500}
                        >Contact</NavLink
                        >
                    </NavUl>
                </LinksContainer>
                <SocialIcons>
                     <li>
                        <a href="https://github.com/scratchytube"><FaGithub /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/bsahota"><FaLinkedin /></a>
                    </li>
                </SocialIcons>
            </NavContainer>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
position: sticky;
top: 0;
width: 100%;
background-color: #fafafa;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`

const NavContainer = styled.div`

@media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    height: 80px;
    z-index: 1;
}
`

const NavHeader = styled.div`

`

const Logo = styled.h3`

`

const MobileBurger = styled.button`

`

const LinksContainer = styled.div`

`

const SocialIcons = styled.ul`

`

const NavUl = styled.div`
list-style: none;
text-align: right;
`

const NavLink = styled(Link)`
color: black;
font-size: 2em;
padding-right: 20px;
display: inline;
cursor: pointer;
`
