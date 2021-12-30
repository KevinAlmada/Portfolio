import styled from '@emotion/styled';
import React from 'react'
import SkillsContainer from '../Components/SkillsContainer';

const Skills = () => {
    const SectionAboutMe = styled.section`
    width: 100%;
    background-color: #3B185F;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: fit-content;
    color: white;
`;
    return (
        <SectionAboutMe>
            <SkillsContainer />
        </SectionAboutMe>
    )
}

export default Skills
