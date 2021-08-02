import React from 'react'
import styled from 'styled-components'

const ProjectCard = ({pj}) => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    const { name, description, image, github, live } = pj
    return (
        <Wrapper>
            <hr />
            <article>
                    <img src={image} alt={name} />
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div className="stack">
                        {/* <p>{thisStack}</p> */}
                    </div>
                    <div className="pj-buttons">
                        <button onClick={() => openInNewTab(github)} className='btn'>
                            Github
                        </button>
                        <button onClick={() => openInNewTab(live)} className='btn'>
                            Live
                        </button>
                    </div>
            </article>
        </Wrapper>
    )
}

export default ProjectCard

const Wrapper = styled.section`
height: 100%;
width: 100%;
display: grid;
row-gap: 3rem;

article {
    max-width: 300px;
    margin-top: 50px;
    margin: 0 auto;
    margin-bottom: 4rem;
    color: #fafafa;
}

p {
    text-align: center;
    letter-spacing: 0.2em
    margin-bottom: 1rem;
    font-size: 0.90rem;
    font-weight: 200;
}

h4 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    padding-top: 1rem;
    font-size: 1.15em;
}

img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    font-weight: 700;
}

button {
text-decoration: none;
color: black;
}

.btn {
    font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}

.btn::after {
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.btn:hover::after {
  top: 0px;
  left: 0px;
}

.pj-buttons {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
}

@media (min-width: 660px) {

article{
    max-width: 1050px;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 50px;
}

img {
    width: 100%;
    display: block;
    margin: 0 auto;
    width: 800px;
    height: 500px;
    border-radius: 1%;
    object-fit: cover;
}

p {
    text-align: center;
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
    font-size: 1.15rem;
    font-weight: 200;
}

h4 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    padding-top: 2rem;
    font-size: 2em;
}

@media (max-width: 836px) {
    img {
    width: 100%;
    display: block;
    margin: 0 auto;
    width: 600px;
    height: 400px;
    border-radius: 1%;
    object-fit: cover;
}
}

@media (min-width: 1080px) {
    img {
    width: 100%;
    display: block;
    margin: 0 auto;
    width: 1050px;
    height: 700px;
    border-radius: 1%;
    object-fit: cover;
}
}

`
