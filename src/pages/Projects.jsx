import styled from '@emotion/styled'
import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext';
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
    padding-top: 15px;
    letter-spacing: 3px;
`;
const Projects = () => {
    const {language} = useContext(LanguageContext)
    return (
        <ProjectsSection>
            <ProjectsTitle>
            {language === true ? "ULTIMOS PROYECTOS":"LATEST PROJECTS"}
            </ProjectsTitle>
            <CardContainer />
        </ProjectsSection>
    )
}

export default Projects
