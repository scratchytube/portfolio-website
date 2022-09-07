import React from "react";
import styled from "styled-components";

const ProjectCard = ({ pj }) => {
  const { name, image, github, live, stack } = pj

  const mappedStack = stack.map((s, index) => {
    return <li className="stack-item" key={index}>{s}</li>;
  })

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Wrapper>
      <hr />
      <article>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <div>
          <ul className="stack">{mappedStack}</ul>
        </div>
        <div className="pj-buttons">
          {github ? (
            <button onClick={() => openInNewTab(github)} className="btn">
              Github
            </button>
          ) : null}
          <button onClick={() => openInNewTab(live)} className="btn">
            Live
          </button>
        </div>
      </article>
    </Wrapper>
  );
};

export default ProjectCard;

const Wrapper = styled.section`
width: 100%;
display: grid;
row-gap: 3rem;

article {
    margin-top: 50px;
    margin: 0 auto;
    margin-bottom: 4rem;
    color: #fafafa;
}

p {
    text-align: center;
    letter-spacing: 0.3em
    margin-bottom: 1rem;
    font-weight: 200;
    padding-top: 20px;
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
    margin: 0 auto;
    display: block;
    max-width: 400px;
    max-height: 500px;
    object-fit: contain;
}

button {
text-decoration: none;
color: black;
}

.stack {
  width: fit-content;
  margin-left: 50px;
  column-gap: 50px;
  padding-top: 20px;
  text-transform: capitalize;
  letter-spacing: 0.2em;
  font-weight: 200;
  grid-template-columns: repeat(2, 1fr);
}

.stack-item {
  width: fit-content;
}

.btn {
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  border-radius: 5px;
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
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.btn:hover::after {
  top: 0px;
  left: 0px;
}

.btn:hover {
  color: white;
  background-color: #445D7B;
  transition: all 0.5s;
}

.pj-buttons {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
    font-weight: 200;
}

@media (min-width: 660px) {

article{
    max-width: 1050px;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 50px;
}

.stack {
  display: flex;
  justify-content: space-evenly;
  text-transform: capitalize;
  letter-spacing: 0.2em;
  font-weight: 200;
  margin-left: 0;
  padding-left: 40px;
  padding-right: 20px;
  margin: 0 auto;
}

img {
    width: 100%;
    
    margin: 0 auto;
    max-width: 800px;
    max-height: 500px;
    border-radius: 1%;
    object-fit: contain;
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


@media (min-width: 1080px) {
    img {
    width: 100%;
    display: block;
    margin: 0 auto;
    max-width: 1050px;
    max-height: 700px;
    border-radius: 1%;
    object-fit: cover;
}
}

`;
