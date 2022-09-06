import React from 'react'
import styled from 'styled-components'
import me from '../assets/it-me.png'

const Landing = () => {
    return (
        <Wrapper id='home'>
            <div className="header-container">
                <div className="image">
                    <img src={me} alt="man behind computer" />
                </div>
                <div className="landing-text">
                    <p>Software Developer</p>
                    <p>Brooklyn, NY</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Landing

const Wrapper = styled.div`
height: 100%;
width: 100%;
padding-top: 2rem;
background-color: #445D7B;
display: flex;
align-items: center;
justify-content: center;

p {
    text-align: center;
    font-size: 1.75rem;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
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
    padding-top: 2rem;
    }

    @media screen and (min-width: 660px) {
img {
    margin: 0 auto;
    height: 550px;
    width: 500px;
    
    }
}

    @media screen and (max-width: 834px) {
    img {
      margin: 0 auto;
      height: 350px;
      width: 275px;
        
        
        }
    }




`
