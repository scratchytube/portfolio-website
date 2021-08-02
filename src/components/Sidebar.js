import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, handleToggle }) => {
    return (
        <Wrapper isOpen={isOpen}>
            <Icon onClick={handleToggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='portfolio' offset={-80} onClick={handleToggle}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to='about' offset={-80} onClick={handleToggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='contact' offset={-80} onClick={handleToggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SocialIconWrap>
                    <li className='social-links'>
                        <a href="https://github.com/scratchytube"><FaGithub /></a>
                    </li>
                    <li className='social-links'>
                        <a href="https://www.linkedin.com/in/bsahota"><FaLinkedin /></a>
                    </li>
                </SocialIconWrap>
            </SidebarWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const SidebarWrapper = styled.div`
color: #fff;
`
const CloseIcon = styled(FaTimes)`
color: #fff;
`

const Icon = styled.div`
position: absolute;
top: 0.2rem;
padding-top: 1rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
}
`

const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.25rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {

}
`

const SocialIconWrap = styled.div`
display: flex;
margin: 0 auto;
width: 30%;
justify-content: space-around;
list-style: none;

.social-links a {
    color: #fff;
}
`
