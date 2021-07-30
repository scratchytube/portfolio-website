import React from 'react'
import styled from 'styled-components'
import me from '../assets/it-me.png'

const Landing = () => {
    return (
        <Wrapper id='home'>
            <div className="header-container">
                <img src={me} alt="mee" />
                <p>UI | UX Web Developer</p>
            </div>
        </Wrapper>
    )
}

export default Landing

const Wrapper = styled.div`
height: 100vh;
width: 100%;
background-color: #445D7B;
display: flex;
align-items: center;
justify-content: center;

p {
    text-align: center;
    font-size: 1.75rem;
    color: #fff;
    margin-top: 20px;
}

h2 {
    font-size: 2rem;
    text-align: center;
    color: #fff;
}

img {
    margin: 0 auto;
    height: 350px;
    width: 275px;
    }


@media screen and (min-width: 360px) {
img {
    margin: 0 auto;
    height: 550px;
    width: 500px;
    /* padding-top: 75px; */
    }
}

`
