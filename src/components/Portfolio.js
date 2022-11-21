import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import { projects } from './Data'

const Portfolio = () => {

    const myProjects = projects.map((pj, index) => (
      <ProjectCard key={index} pj={pj} />
    ))

    return (
        <Wrapper id='portfolio'>
        <h1>Projects</h1>
            <div className="project-list">
                { myProjects }
            </div>
        </Wrapper>
    )
}

export default Portfolio

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #c26868;

  h1 {
    text-align: center;
    padding-top: 5rem;
    font-size: 3em;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  .project-list {
    margin-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
