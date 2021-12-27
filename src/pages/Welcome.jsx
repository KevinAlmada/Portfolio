import styled from '@emotion/styled'
import React from 'react'
import Animation from '../Components/Animation'
const WelcomeSection = styled.section `
    width: 100%;
    background-color: #2A0944;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    @media (min-width: 768px) {
        flex-direction: row;
        font-size: 50px;
      }
`;
const TitleP = styled.p `
    font-size: 36px;
    
    color: white;
    
`;

const Welcome = () => {
    return (
        <WelcomeSection>
            <TitleP>WELCOME TO MY PORTFOLIO</TitleP>
            <Animation />
        </WelcomeSection>
    )
}

export default Welcome
