import React from 'react'
import styled from 'styled-components'
import avatar from '../assets/avadar-3.png'

const About = () => {
    return (
      <Wrapper id="about">
        <div className="img">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="me">
          <p>
            Hey, I'm Brian. Born and raised in Queens NY to two immigrant
            parents, I realized the value of hard work at an early age. I had to
            forgo higher education to enter the workforce and have been lucky
            enough to work for some great companies such as the NBA and Rolex
            USA. When Covid-19 came to NYC, I decided to make the best of my
            time in quarantine and attended Flatiron's super intensive bootcamp.
            During my bootcamp journey I've crossed paths with brilliant
            instructors, a welcoming tech community and talented colleagues who
            continue to inspire me every day.
          </p>

          <p>
            Now as a software engineer, i've continued to push myself
            post-graduation by collaborating on projects with other engineers,
            learning new technologies and sharpening my existing skills. Holler
            at me.
          </p>
        </div>
      </Wrapper>
    );
}

export default About

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
background-color: #445D7B;
padding-bottom: 3rem;

.img {
    margin: 0 auto;
    padding-top: 1rem;
}

img {
    height: 150px;
    width: 150px;
}

.me {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-weight: 200;
    font-size: 1rem;
    max-width: 82%;
    margin: 0 auto;
    line-height: 1.35rem;
    padding-top: 3rem;
    letter-spacing: 0.1em;
}

@media (min-width: 550px) {
    .me {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.2em;
    color: #fff;
    font-weight: 200;
    font-size: 0.9rem;
    max-width: 75%;
    margin: 0 auto;
    line-height: 1.75rem;
    padding-top: 3rem;
    }
}

@media (min-width: 660px) {
    .me {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.2em;
    color: #fff;
    font-weight: 200;
    font-size: 1.05rem;
    max-width: 75%;
    margin: 0 auto;
    line-height: 1.75rem;
    padding-top: 3rem;
    }
}

@media (min-width: 1050px) {
    .me {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.2em;
    color: #fff;
    font-weight: 200;
    font-size: 1rem;
    max-width: 75%;
    margin: 0 auto;
    line-height: 3rem;
    padding-top: 3rem;
    }
}
`
