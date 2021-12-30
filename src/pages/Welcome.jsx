import styled from '@emotion/styled'
import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext';
import Animation from '../Components/Animation'
const WelcomeSection = styled.section `
    width: 100%;
    background-color: #2A0944;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    @media (min-width: 900px) {
        flex-direction: row;
        font-size: 50px;
      }
`;
const TitleP = styled.p `
    font-size: 36px;
    text-align :center ;
    color: white;
`;

const Welcome = () => {
    const {language} = useContext(LanguageContext)
    return (
        <WelcomeSection>
            <TitleP>{language === true ? "BIENVENIDO A MI PORTFOLIO":"WELCOME TO MY PORTFOLIO"}</TitleP>
            <Animation />
        </WelcomeSection>
    )
}

export default Welcome
