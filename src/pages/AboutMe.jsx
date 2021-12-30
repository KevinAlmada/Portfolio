import styled from '@emotion/styled'
import React from 'react'
import AnimationAbout from '../Components/AnimationAbout'
import AboutMeInfo from '../Components/AboutMeInfo'
const SectionAboutMe = styled.section`
    width: 100%;
    background-color: #3B185F;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    color: white;
    @media (min-width: 500px) {
        font-size: 20px;
      }
      @media (min-width: 768px) {
        flex-direction: row;
      }
`;
const AboutMe = () => {
    return (
        <SectionAboutMe>
            <AnimationAbout />
            <AboutMeInfo />
        </SectionAboutMe>
    )
}

export default AboutMe
