import styled from '@emotion/styled'
import React from 'react'
import CardContainer from '../Components/CardContainer';
const ProjectsSection = styled.section`
    display:grid;
    grid-template-columns: 1;
    grid-template-rows: 2;
    background-color: #A12568;
    color: #FEC260;
    justify-content: center;
`;
const ProjectsTitle = styled.h2`
    margin: 0 auto;
    letter-spacing: 3px;
`;
const Projects = () => {
    return (
        <ProjectsSection>
            <ProjectsTitle>LATEST PROJECTS</ProjectsTitle>
            <CardContainer />
        </ProjectsSection>
    )
}

export default Projects
